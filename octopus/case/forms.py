from flask import request
from flask.ext.login import current_user
from flask_wtf import Form
from wtforms import StringField, SelectField, TextAreaField, SelectMultipleField, BooleanField
from wtforms.validators import DataRequired, Optional, Length
from wtforms.fields.html5 import DateField, IntegerField

from octopus.case.queries import single_case_staff
from octopus.models import Region, CaseType, Case, Tag, CaseStaffMap, CaseFile, User
from octopus.extensions import db


class NewCaseForm(Form):
    crd_number = IntegerField('CRD Number',
                              validators=[DataRequired()])
    case_name = StringField('Case Name', validators=[DataRequired()])
    case_desc = TextAreaField('Case Description')
    start_date = DateField('Start Date',
                           validators=[DataRequired()])
    end_date = DateField('End Date', validators=[Optional()])
    case_type = SelectField('Case Type', validators=[DataRequired()])

    case_region = SelectField('Regional Office', validators=[DataRequired()])
    case_lead = SelectField('Case Lead', validators=[DataRequired()])

    self_to_case = BooleanField('Add me to this case', default=True)


    def __init__(self, *args, **kwargs):
        super(NewCaseForm, self).__init__(*args, **kwargs)
        self.case_type.choices = [(unicode(i.id), i.code) for i in CaseType.query]
        self.case_region.choices = [(unicode(i.id), i.code) for i in Region.query]
        case_lead = [(unicode(i.id), i.full_name) for i in User.query]
        for c, (i, d) in enumerate(case_lead):
            if i == unicode(current_user.id):
                case_lead.insert(0, case_lead.pop(c))
        self.case_lead.choices = case_lead

    def validate(self):
        initial_validation = super(NewCaseForm, self).validate()
        if not initial_validation:
            return False
        return True

    def commit_new_case(self):
        case_type = CaseType.query.get(self.case_type.data)
        region = Region.query.get(self.case_region.data)
        case_lead = User.query.get(self.case_lead.data)

        case = Case.create(crd_number=self.crd_number.data,
                           case_name=self.case_name.data,
                           case_desc=self.case_desc.data,
                           start_date=self.start_date.data,
                           end_date=self.end_date.data,
                           case_type=case_type,
                           region=region,
        )

        # add case lead to staff table
        lead = CaseStaffMap.create(user_id=case_lead.id,
                                   case_id=case.id,
                                   primary=True)
        lead.save()
        return case


class EditCoreCaseForm(Form):
    crd_number = IntegerField('CRD Number',
                              validators=[Optional()])
    case_name = StringField('Case Name', validators=[Optional()])
    case_desc = TextAreaField('Case Description')
    start_date = DateField('Start Date',
                           validators=[Optional()])
    end_date = DateField('End Date', validators=[Optional()])
    case_type = SelectField('Case Type', validators=[Optional()])

    case_region = SelectField("Regional Office", validators=[Optional()])
    case_lead = SelectField('Case Lead', validators=[DataRequired()])

    def __init__(self, case_id, *args, **kwargs):
        super(EditCoreCaseForm, self).__init__(*args, **kwargs)
        self.case_id = case_id
        self.current_case = Case.get_by_id(self.case_id)

        # This step is needed for bypassing a defaulting of the SelectField bug
        # we set the default by making the first element of the list the default value
        case_types = [(unicode(i.id), i.code) for i in CaseType.query]
        if self.current_case.case_type.id:
            for c, (i, d) in enumerate(case_types):
                if i == self.current_case.case_type.id:
                    case_types.insert(0, case_types.pop(c))
                    break
        self.case_type.choices = case_types
        regions = [(unicode(i.id), i.code) for i in Region.query]
        if self.current_case.region.id:
            for c, (i, d) in enumerate(regions):
                if i == self.current_case.region.id:
                    regions.insert(0, regions.pop(c))
        self.case_region.choices = regions

        case_staff = [(unicode(i.id), i.full_name) for i in User.query]
        lead, _ = single_case_staff(self.case_id)
        if lead:
            for c, (i, d) in enumerate(case_staff):
                if i == unicode(lead[0].id):
                    case_staff.insert(0, case_staff.pop(c))
        self.case_lead.choices = case_staff

        self.crd_number.data = self.current_case.crd_number
        self.case_name.data = self.current_case.case_name
        self.case_desc.data = self.current_case.case_desc
        self.start_date.data = self.current_case.start_date
        self.end_date.data = self.current_case.end_date

    def validate(self):
        initial_validation = super(EditCoreCaseForm, self).validate()
        if not initial_validation:
            return False
        return True

    def commit_updates(self):
        if self.case_name.data:
            self.current_case.case_name = self.case_name.data
        if self.case_desc.data:
            self.current_case.case_desc = self.case_desc.data
        if self.crd_number.data:
            self.current_case.crd_number = self.crd_number.data
        if self.start_date.data:
            self.current_case.start_date = self.start_date.data
        if self.end_date.data:
            self.current_case.end_date = self.end_date.data
        if self.case_type.data:
            case_type = CaseType.query.get(self.case_type.data)
            self.current_case.case_type = case_type
        if self.case_region.data:
            region = Region.query.get(self.case_region.data)
            self.current_case.region = region

        self.current_case.save()


class CaseTagsForm(Form):
    case_tags = SelectMultipleField(label='Case Tags', validators=[Optional()])

    def __init__(self, case_id, kind, *args, **kwargs):
        """

        :param case_id: int
        :param kind: must be one of 'risk', 'non_qau_staff'
        """
        super(CaseTagsForm, self).__init__(*args, **kwargs)
        self.case_id = case_id
        if kind not in {'risk', 'non_qau_staff'}:
            raise ValueError('tag "kind" must be one of: "risk", "non_qau_staff"')
        self.tag_kind = kind
        self.case_tags.choices = [(i.tag, i.tag) for i in Case.get_by_id(case_id).tags if i.kind == self.tag_kind]
        self.tag_values = None

    def commit_updates(self):
        """
        type: IO ()
        commit updates to database
        :raise ValueError:
        :returns None
        """
        case = Case.get_by_id(self.case_id)

        tags = []
        if self.tag_values:
            for t in self.tag_values:
                tag = Tag.query.filter(Tag.kind == self.tag_kind, Tag.tag == t).first()
                if tag:
                    tags.append(tag)
                else:
                    tags.append(Tag.create(kind=self.tag_kind, tag=t))

        case.tags = tags + [i for i in Tag.query.filter(Tag.kind != self.tag_kind)]
        case.save()
        return None

    def validate(self):
        if self.case_tags.data:
            self.tag_values = set(self.case_tags.data)
        return True


class CaseStaffForm(Form):
    contractors = SelectMultipleField(label='QAU Contractor Resources', validators=[Optional()], coerce=int)
    qau_staff = SelectMultipleField(label='QAU Full Time Resources', validators=[Optional()], coerce=int)

    def __init__(self, case_id, *args, **kwargs):
        super(CaseStaffForm, self).__init__(*args, **kwargs)
        self.case_id = case_id

        self.contractors.choices = [(i.id, i.username) for i in User.query if i.is_contractor]
        self.qau_staff.choices = [(i.id, i.username) for i in User.query if i.is_permanent]

        if request.method != 'POST':
            staff = db.session.query(User). \
                join('user_cases', 'case'). \
                filter(User.user_cases.any(case_id=case_id)). \
                filter(CaseStaffMap.primary == 0).all()

            self.contractors.default = [unicode(i.id) for i in staff if i.is_contractor]
            self.qau_staff.default = [unicode(i.id) for i in staff if i.is_permanent]
            self.process()


    def validate(self):
        initial_validation = super(CaseStaffForm, self).validate()
        if not initial_validation:
            return False
        return True

    def commit_updates(self):

        case = Case.get_by_id(self.case_id)

        staff = db.session.query(User). \
            join('user_cases', 'case'). \
            filter(User.user_cases.any(case_id=self.case_id)).all()

        # set of previously assigned users
        prev_assigned = set([i.id for i in staff])
        # set of what the new assignment should be
        all_assigned = set(self.contractors.data + self.qau_staff.data)
        # set of to be removed entries
        prev_assigned_remove = prev_assigned.difference(all_assigned)
        # set of all the new users added to the case
        new_assigned_add = all_assigned.difference(prev_assigned)

        # start removing the old entries
        for user_id in prev_assigned_remove:
            user = User.get_by_id(user_id)
            case.users.remove(user)
        case.save()

        # add in the new changes
        for user_id in new_assigned_add:
            user = User.get_by_id(user_id)
            # at some point we will need to toggle primary or not, this is how you set that flag
            CaseStaffMap.create(user=user, case=case).save()

        return None


class CaseFileForm(Form):
    kind = StringField(label='File Type', validators=[DataRequired(), Length(min=5, max=30)])
    name = StringField(label='File Name', validators=[DataRequired(), Length(min=5, max=60)])
    path = StringField(label='File Path', validators=[DataRequired()])

    def __init__(self, case_id, file_id, *args, **kwargs):
        super(CaseFileForm, self).__init__(*args, **kwargs)
        self.case_id = case_id
        if file_id:
            self.file = CaseFile.get_by_id(file_id)
        else:
            self.file = None

        if request.method != 'POST' and self.file:
            # This means its a new form
            self.kind.data = self.file.kind
            self.name.data = self.file.name
            self.path.data = self.file.path

    def validate(self):
        initial_validation = super(CaseFileForm, self).validate()
        if not initial_validation:
            return False
        return True

    def commit_updates(self):
        if self.file:
            self.file.update(kind=self.kind.data, name=self.name.data, path=self.path.data, case_id=self.case_id)
        else:
            self.file = CaseFile.create(kind=self.kind.data, name=self.name.data, path=self.path.data,
                                        case_id=self.case_id)
        self.file.save()
        return None



from flask_wtf import Form
from flask.ext.login import current_user
from wtforms import StringField, SelectField, TextAreaField, SelectMultipleField, BooleanField
from wtforms.validators import DataRequired, Optional
from wtforms.fields.html5 import DateField, IntegerField


from octopus.case.models import Region, CaseType, Case
from octopus.user.models import User
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
        self.case_lead.choices = [(unicode(i.id), i.full_name) for i in User.query]

    def validate(self):
        initial_validation = super(NewCaseForm, self).validate()
        if not initial_validation:
            return False
        return True

    def commit_new_case(self):
        case_type = CaseType.query.get(self.case_type.data)
        region = Region.query.get(self.case_region.data)

        case = Case.create(crd_number=self.crd_number.data,
                           case_name=self.case_name.data,
                           case_desc=self.case_desc.data,
                           start_date=self.start_date.data,
                           end_date=self.end_date.data,
                           case_type=case_type,
                           region=region,
                           )
        
        case.staff.append(self.case_lead)

        if self.self_to_case:
            case.staff.append(current_user)
            case.save()

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

    def __init__(self, case_id, *args, **kwargs):
        super(EditCoreCaseForm, self).__init__(*args, **kwargs)
        self.case_id = case_id
        self.current_case = Case.get_by_id(self.case_id)

        # This step is needed for bypassing a defaulting of the SelectField bug
        # we set the default by making the first element of the list the default value
        case_types = [(i.id, i.code) for i in CaseType.query]
        if self.current_case.case_type.id:
            for c, (i, d) in enumerate(case_types):
                if i == self.current_case.case_type.id:
                    case_types.insert(0, case_types.pop(c))
                    break
        self.case_type.choices = case_types
        regions = [(i.id, i.code) for i in Region.query]
        if self.current_case.region.id:
            for c, (i, d) in enumerate(regions):
                if i == self.current_case.region.id:
                    regions.insert(0, regions.pop(c))
        self.case_region.choices = regions

        self.crd_number.placeholder = self.current_case.crd_number if self.current_case.crd_number else None
        self.case_name.placeholder = self.current_case.case_name if self.current_case.case_name else None
        self.case_desc.placeholder = self.current_case.case_desc if self.current_case.case_desc else None
        self.start_date.placeholder = self.current_case.start_date if self.current_case.start_date else None
        self.end_date.placeholder = self.current_case.end_date if self.current_case.end_date else None

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

    def __init__(self, case_id, *args, **kwargs):
        super(CaseTagsForm, self).__init__(*args, **kwargs)
        self.case_tags.choices = [(i.id, i.tag) for i in Case.get_by_id(case_id).tags if i.type == 'risk']

    def commit_updates(self):
        print self.case_tags.data

    def validate(self):
        return True


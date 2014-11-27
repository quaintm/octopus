from flask_wtf import Form
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Optional
from wtforms.fields.html5 import DateField, IntegerField

from octopus.case.models import Region, CaseType, Case


class CoreCaseForm(Form):
    crd_number = IntegerField('CRD Number',
                              validators=[DataRequired()])
    case_name = StringField('Case Name', validators=[DataRequired()])
    case_desc = TextAreaField('Case Description')
    start_date = DateField('Start Date',
                           validators=[DataRequired()])
    end_date = DateField('End Date', validators=[Optional()])
    case_type = SelectField('Case Type', validators=[DataRequired()])

    case_region = SelectField("Regional Office", validators=[DataRequired()])

    def __init__(self, case_id=None, *args, **kwargs):
        super(CoreCaseForm, self).__init__(*args, **kwargs)
        self.case_id = case_id
        self.case_type.choices = [(i.id, i.description) for i in CaseType.query]
        self.case_region.choices = [(i.id, i.id) for i in Region.query]

    def validate(self):
        initial_validation = super(CoreCaseForm, self).validate()
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
                           region=region)
        return case


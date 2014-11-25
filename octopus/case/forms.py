from flask_wtf import Form
from wtforms import StringField, SelectField, TextAreaField
from wtforms.validators import DataRequired, Optional
from wtforms.fields.html5 import DateField, IntegerField

from .models import Region, CaseType


class NewCaseForm(Form):
    crd_number = IntegerField('CRD Number',
                    validators=[DataRequired()])
    case_name = StringField('Case Name', validators=[DataRequired()])
    case_desc = TextAreaField('Case Description')
    start_date = DateField('Start Date',
                             validators=[DataRequired()])
    end_date = DateField('End Date', validators=[Optional()])
    case_type = SelectField('Case Type', validators=[DataRequired()])

    case_region = SelectField("Regional Office", validators=[DataRequired()])

    def __init__(self, *args, **kwargs):
        super(NewCaseForm, self).__init__(*args, **kwargs)
        self.case_type.choices = [(i.id, i.description) for i in CaseType.query]
        self.case_region.choices = [(i.id, i.id) for i in Region.query]


    def validate(self):
        initial_validation = super(NewCaseForm, self).validate()
        if not initial_validation:
            return False
        return True


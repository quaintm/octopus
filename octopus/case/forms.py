from flask_wtf import Form
from wtforms import StringField, SelectField
from wtforms.validators import DataRequired, Optional
from wtforms.fields.html5 import DateField, IntegerField
from .models import Regions

from .models import User


class CaseForm(Form):
    crd_number = IntegerField('CRD Number',
                    validators=[DataRequired()])
    start_date = DateField('Start Date',
                             validators=[DataRequired()])
    end_date = DateField('End Date', validators=[Optional()])
    case_type = StringField('Case Type',
                                validators=[DataRequired()])
    case_region = SelectField("Regional Office", validators=[DataRequired()], choices=Regions)

    def __init__(self, *args, **kwargs):
        super(CaseForm, self).__init__(*args, **kwargs)
        self.user = None

    def validate(self):
        initial_validation = super(CaseForm, self).validate()
        if not initial_validation:
            return False
        user = User.query.filter_by(username=self.username.data).first()
        if user:
            self.username.errors.append("Username already registered")
            return False
        user = User.query.filter_by(email=self.email.data).first()
        if user:
            self.email.errors.append("Email already registered")
            return False
        return True


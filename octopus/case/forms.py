import json
from flask import jsonify
from flask_wtf import Form
from wtforms import StringField, SelectField, HiddenField, TextField, TextAreaField
from wtforms.validators import DataRequired, Optional
from wtforms.fields.html5 import DateField, IntegerField
from .models import Region, CaseType
from octopus.extensions import db

class NewCaseForm(Form):

    _regions = []
    _case_types = []

    crd_number = IntegerField('CRD Number',
                    validators=[DataRequired()])
    case_name = StringField('Case Name', validators=[DataRequired()])
    case_desc = TextAreaField('Case Description')
    start_date = DateField('Start Date',
                             validators=[DataRequired()])
    end_date = DateField('End Date', validators=[Optional()])
    case_type = SelectField('Case Type', validators=[DataRequired()],
                            choices=_case_types)

    case_region = SelectField("Regional Office", validators=[DataRequired()],
                              choices=_regions)

    def __init__(self, *args, **kwargs):
        super(NewCaseForm, self).__init__(*args, **kwargs)
        self._case_types = db.session.query(CaseType.id).all()
        self._regions = db.session.query(Region.id).all()


    def validate(self):
        initial_validation = super(NewCaseForm, self).validate()
        if not initial_validation:
            return False
        return True


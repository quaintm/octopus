from flask import request, flash
from wtforms.ext.appengine.db import model_form
from octopus.case.models import Case
from octopus.case.forms import EditCoreCaseForm


def create_single_field_form():
    model_name = request.args.get('model_name')
    field_name = request.args.get('field_name')

    if not model_name or not field_name:
        flash('Invalid Request Parameters: model and field are required', category='error')
        return None

    if model_name is 'case':
        model = Case
        base_form = EditCoreCaseForm
    else:
        flash('Model name not found', category='error')
        return None

    if not getattr(base_form, field_name):
        flash('Invalid Request Parameters: field not found', category='error')
        return None

    form = model_form(model, base_class=base_form, only=field_name)

    return form


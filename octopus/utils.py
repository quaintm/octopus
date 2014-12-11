# -*- coding: utf-8 -*-
'''Helper utilities and decorators.'''
from flask import flash, abort
from functools import update_wrapper, wraps
from flask.ext.login import current_user
from octopus.extensions import db
from octopus.user.models import User
from wtforms.validators import Optional, DataRequired



def flash_errors(form, category="warning"):
    '''Flash all errors for a form.'''
    for field, errors in form.errors.items():
        for error in errors:
            flash("{0} - {1}"
                    .format(getattr(form, field).label.text, error), category)

class RequiredIf(object):
    """Validates field conditionally.

    Usage::

        login_method = StringField('', [AnyOf(['email', 'facebook'])])
        email = StringField('', [RequiredIf(login_method='email')])
        password = StringField('', [RequiredIf(login_method='email')])
        facebook_token = StringField('', [RequiredIf(login_method='facebook')])
    """
    def __init__(self, *args, **kwargs):
        self.conditions = kwargs

    def __call__(self, form, field):
        for name, data in self.conditions.iteritems():
            if name not in form._fields:
                Optional(form, field)
            else:
                condition_field = form._fields.get(name)
                if condition_field.data == data and not field.data:
                    DataRequired()(form, field)
        Optional()(form, field)


def user_on_case(fn):
    @wraps(fn)
    def wrapped_function(*args, **kwargs):

        if not current_user.is_admin:

            case_id = kwargs['case_id']
            case_user = db.session.query(User).\
                join('user_cases', 'case').\
                filter(User.user_cases.any(case_id=case_id)).\
                filter(User.id==current_user.id).all()

            if not case_user:
                abort(403)
        return fn(*args, **kwargs)
    return update_wrapper(wrapped_function, fn)

def admin_required(fn):
    @wraps(fn)
    def wrapped_function(*args, **kwargs):

        if not current_user.is_admin:
            abort(403)
        return  fn(*args, **kwargs)
    return update_wrapper(wrapped_function, fn)



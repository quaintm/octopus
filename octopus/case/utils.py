from flask import flash
from flask.ext.login import current_user
from sqlalchemy.event import contains
from octopus.case.models import Case, case_assignments
from octopus.user.models import User

__author__ = 'MartinoW'

def create_query(args, q):
    conditions = []
    joins = set()
    valid = True
    user_id = args.get('user_id')
    if user_id:
        if user_id == "me":
            user = User.get_by_id(current_user.id)
        else:
            try:
                user_id = int(user_id)
                user = User.get_by_id(user_id)
            except ValueError:
                flash('Invalid User Id Entered')
                valid = False
        if valid:
            q = q.join(case_assignments, User).filter(case_assignments.c.user_id == user.id)

    return valid, q

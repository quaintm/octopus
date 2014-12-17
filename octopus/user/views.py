# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user

from octopus.extensions import nav, db
from octopus.user.forms import EditUserProfile
from octopus.models import User
from octopus.utils import flash_errors


blueprint = Blueprint("user", __name__, url_prefix='/user',
                      static_folder="../static")

nav.Bar('user', [
    nav.Item('<i class="fa fa-user fa-lg"></i>', '', 
        html_attrs=str("data-placement='bottom',\
                    title='Users'"
        ),
        items=[
        nav.Item('My Profile', 'user.view'),
        nav.Item('All Users', 'user.all_users')

    ])
])


@blueprint.route("/all_users")
@login_required
def all_users():
    users = db.session.query(User.id.label("ID"),
                             User.username.label("Username"),
                             User.first_name.label("First Name"),
                             User.last_name.label("Last Name"),
                             User.email.label("Email")
                             ).order_by(User.id.desc())
    extra_cols = [
        {'header': {'text': ""},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('user.view', user_id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-default btn-sm center-block'}
         ]
         }
    ]
    return render_template("user/members.html", users=users,
                           extra_cols=extra_cols)


@blueprint.route('/query')
@login_required
def query():
    return render_template('public/home.html')


@blueprint.route("/view", methods=['GET', 'POST'])
@blueprint.route("/view/<user_id>", methods=['GET', 'POST'])
@login_required
def view(user_id=None):
    if user_id is None:
        user = current_user
        user_id = current_user.id
    else:
        user = User.query.filter_by(id=user_id).first_or_404()

    form = EditUserProfile(user_id, request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            form.commit_updates()
            flash("User Profile Edits Saved", category='success')
            return redirect(url_for('user.view', user_id=user_id))
        else:
            flash_errors(form)
    return render_template("user/profile.html", user=user, form=form)


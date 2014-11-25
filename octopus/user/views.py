# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user

from octopus.extensions import nav, db
from octopus.user.forms import EditUserProfile, save_profile_edits
from octopus.user.models import User
from octopus.utils import flash_errors


blueprint = Blueprint("user", __name__, url_prefix='/user',
                      static_folder="../static")

nav.Bar('user', [
    nav.Item('<i class="fa fa-user"></i>', '', items=[
        nav.Item('Dashboard', 'user.dashboard'),
        nav.Item('My Profile', 'user.view')
    ])
])


@blueprint.route("/")
@blueprint.route("/dashboard")
@login_required
def dashboard():
    users = db.session.query(User.id.label("ID"),
                             User.username.label("Username"),
                             User.first_name.label("First Name"),
                             User.last_name.label("Last Name"),
                             User.email.label("Email")
                             ).order_by(User.id.desc())
    extra_cols = [
        {'header': {'text': "View/Edit"},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('user.view', id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-primary btn-sm'},
             {'func': lambda x: url_for('user.edit', id=getattr(x, 'ID')),
              'text': 'Edit',
              'type': 'button',
              'class': 'btn btn-warning btn-sm'}
         ]
         }
    ]
    return render_template("user/members.html", users=users, extra_cols=extra_cols)


@blueprint.route('/query')
def query():
    return render_template('public/home.html')


@blueprint.route("/view", methods=['GET', 'POST'])
@blueprint.route("/view/<int:id>", methods=['GET', 'POST'])
@login_required
def view(id=None):
    if id is None:
        user = current_user
        id = current_user.id
    else:
        user = User.query.filter_by(id=id).first_or_404()

    form = EditUserProfile(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            save_profile_edits(form)
            flash("User Profile Edits Saved", category='success')
            return redirect(url_for('user.view', id=id))
        else:
            flash_errors(form)
    return render_template("user/profile.html", user=user, form=form)


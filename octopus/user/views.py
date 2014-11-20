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
    nav.Item('User', '', items=[
        nav.Item('All Users', 'user.members'),
        nav.Item('My Profile', 'user.profile',
                 items=[nav.Item('Edit My Profile', 'user.edit_profile')])
    ])
])


@blueprint.route("/")
@blueprint.route("/members")
@login_required
def members():
    users = db.session.query(User.id.label("ID"),
                             User.username.label("Username"),
                             User.first_name.label("First Name"),
                             User.last_name.label("Last Name"),
                             User.email.label("Email")
                             ).order_by(User.id.desc())
    return render_template("user/members.html", users=users)


@blueprint.route("/profile")
@blueprint.route("/profile/<int:id>")
@login_required
def profile(id=None):
    if id is None:
        user = current_user
        id = current_user.id
    else:
        user = User.query.filter_by(id=id).first_or_404()

    return render_template("user/profile.html", user=user)


@blueprint.route("/profile/<int:id>/edit", methods=["GET", "POST"])
@blueprint.route("/profile/edit", methods=["GET", "POST"])
@login_required
def edit_profile(id=None):
    if id is None:
        user = current_user
        id = current_user.id
    else:
        user = User.query.filter_by(id=id).first_or_404()

    form = EditUserProfile(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            save_profile_edits(form)
            flash("User Profile Edits Saved")
            redirect_url = request.args.get("next") or url_for("user.members")
            return redirect(redirect_url)
        else:
            flash_errors(form)
    return render_template("user/edit_profile.html", form=form, user=user)


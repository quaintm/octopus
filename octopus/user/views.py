# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user

from octopus.extensions import nav
from octopus.user.forms import EditUserProfile, save_profile_edits
from octopus.user.models import User
from octopus.utils import flash_errors


blueprint = Blueprint("user", __name__, url_prefix='/users',
                        static_folder="../static")

nav.Bar('user', [
    nav.Item('User', '', items=[
        nav.Item('Members', 'user.members'),
        nav.Item('Edit My Profile', 'edit_profile')
    ])
])

@blueprint.route("/")
@login_required
def members():
    return render_template("users/members.html")

@blueprint.route("/profile/<int:id>/edit", methods=["GET", "POST"])
@blueprint.route("profile/edit", methods=["GET", "POST"])
@login_required
def edit_profile(id=current_user.get_id()):
    user = User.query.filter_by(id=id).first_or_404()
    form = EditUserProfile(request.form, user)
    if request.method == 'POST':
        if form.validate_on_submit():
            save_profile_edits(form)
            flash("User Profile Edits Saved")
            redirect_url = request.args.get("next") or url_for("user.profile", id=id)
            return redirect(redirect_url)
        else:
            flash_errors(form)
    return render_template("users/edit_profile.html", user=user)


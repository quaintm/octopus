# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user

from octopus.extensions import nav
from octopus.case.models import Region, CaseType, Case
from octopus.user.forms import EditUserProfile, save_profile_edits
from octopus.user.models import User
from octopus.utils import flash_errors


blueprint = Blueprint("case", __name__, url_prefix='/case',
                      static_folder="../static")

nav.Bar('case', [
    nav.Item('Case', '', items=[
        nav.Item('All Cases', 'user.members'),
        nav.Item('My Cases', 'case.'),
        nav.Item('Create New Case', 'case.new_case')
    ])
])


@blueprint.route("/")
@blueprint.route("/members")
@login_required
def members():
    return render_template("users/members.html", users=User.query.order_by(User.id.desc()))


@blueprint.route("/profile")
@blueprint.route("/profile/<int:id>")
@login_required
def profile(id=None):
    if id is None:
        user = current_user
        id = current_user.id
    else:
        user = User.query.filter_by(id=id).first_or_404()

    return render_template("users/profile.html", user=user)


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
    return render_template("users/edit_profile.html", form=form, user=user)

# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user

from octopus.extensions import nav, db
from octopus.case.models import Region, CaseType, Case
from octopus.user.forms import EditUserProfile, save_profile_edits
from octopus.utils import flash_errors


blueprint = Blueprint("case", __name__, url_prefix='/case',
                      static_folder="../static")

nav.Bar('case', [
    nav.Item('Case', '', items=[
        nav.Item('All Cases', 'case.query'),
        nav.Item('My Cases', 'case.query', args={'user_id': 'me'}),
        nav.Item('Create New Case', 'case.new_case')
    ])
])


@blueprint.route("/query")
@login_required
def query():
    conditions = []
    valid = True
    user_id = request.args.get('user_id')
    if user_id:
        if user_id == "me":
            user_id = current_user.id
        else:
            try:
                user_id = int(user_id)
            except ValueError:
                flash('Invalid User Id Entered')
                valid = False
        if valid:
            conditions.append(Case.primary_id == user_id)
            conditions.append(Case.secondary_id == user_id)

    if valid:
        if conditions:
            return render_template("case/query.html",
                                   cases=Case.query.filter(db.or_(*conditions)).order_by(Case.id.desc()))
        else:
            return render_template("case/query.html",
                                   cases=Case.query.order_by(Case.id.desc()))

    return render_template("case/query.html",
                           cases=Case.query.order_by(Case.id.desc()))

@blueprint.route("/new_case", methods=["GET", "POST"])
@login_required
def new_case():
    # form = EditUserProfile(request.form)
    # if request.method == 'POST':
    #     if form.validate_on_submit():
    #         save_profile_edits(form)
    #         flash("User Profile Edits Saved")
    #         redirect_url = request.args.get("next") or url_for("user.members")
    #         return redirect(redirect_url)
    #     else:
    #         flash_errors(form)
    # return render_template("case/edit_case.html")
    return redirect(url_for("public.home"))


@blueprint.route("/edit_case", methods=["GET", "POST"])
@login_required
def edit_case():
    # case_id = request.args.get("case_id")
    # if id is None:
    #     user = current_user
    #     id = current_user.id
    # else:
    #     user = User.query.filter_by(id=id).first_or_404()
    #
    # form = EditUserProfile(request.form)
    # if request.method == 'POST':
    #     if form.validate_on_submit():
    #         save_profile_edits(form)
    #         flash("User Profile Edits Saved")
    #         redirect_url = request.args.get("next") or url_for("user.members")
    #         return redirect(redirect_url)
    #     else:
    #         flash_errors(form)
    # return render_template("user/edit_profile.html", form=form, user=user)
    return redirect(url_for("public.home"))

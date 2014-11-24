# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user
from octopus.case.forms import NewCaseForm

from octopus.extensions import nav, db
from octopus.case.models import Region, CaseType, Case
from octopus.user.forms import EditUserProfile, save_profile_edits
from octopus.utils import flash_errors


blueprint = Blueprint("case", __name__, url_prefix='/case',
                      static_folder="../static")

nav.Bar('case', [
    nav.Item('<i class="fa fa-briefcase"></i>', '', items=[
        nav.Item('Dashboard', 'case.dashboard'),
        nav.Item('My Cases', 'case.query', args={'user_id': 'me'}),
        nav.Item('Create New Case', 'case.new')
    ])
])

@blueprint.route("/")
@blueprint.route("/dashboard")
def dashboard():
    cases = db.session.query(Case.id.label("ID"),
                             Case.crd_number.label("CRD #"),
                             Case.case_name.label("Name"),
                             Case.case_type.label("Type"),
                             Case.start_date.label("Start"),
                             Case.end_date.label("End"),
                             Case.primary.label("Primary")
    ).order_by(Case.id.desc())
    extra_cols = [
        {'header': {'text': "View/Edit"},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('case.view', id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-primary btn-sm'},
             {'func': lambda x: url_for('cases.edit', id=getattr(x, 'ID')),
              'text': 'Edit',
              'type': 'button',
              'class': 'btn btn-warning btn-sm'}
         ]
        }
    ]
    return render_template("case/dashboard.html", cases=cases, extra_cols=extra_cols)

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

    return redirect(url_for('cases.dashboard'))

@blueprint.route('/view/<int:id>')
@login_required
def view(id):
    cases = db.session.query(Case.id.label("ID"),
                             Case.crd_number.label("CRD #"),
                             Case.case_name.label("Name"),
                             Case.case_type.label("Type"),
                             Case.case_desc.label("Description"),
                             Case.start_date.label("Start"),
                             Case.end_date.label("End"),
                             Case.primary.label("Primary")
    ).filter_by(id=id).order_by(Case.id.desc())

    return render_template('case/case.html', case=cases)

@blueprint.route("/new", methods=["GET", "POST"])
@login_required
def new():
    form = NewCaseForm(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            case = Case.create(crd_number=form.crd_number.data,
                                  case_name=form.case_name.data,
                                  case_desc=form.case_desc.data,
                                  start_date=form.start_date.data,
                                  end_date=form.end_date.data,
                                  case_type=form.case_type.data,
                                  region=form.case_region.data)
            flash("New Case Created")
            return redirect(url_for('case.view', id=case.id))
        else:
            flash_errors(form)
    return render_template("case/new.html", form=form)


@blueprint.route("/edit", methods=["GET", "POST"])
@login_required
def edit():
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
    #         redirect_url = request.args.get("next") or url_for("user.dashboard")
    #         return redirect(redirect_url)
    #     else:
    #         flash_errors(form)
    # return render_template("user/new.html", form=form, user=user)
    return redirect(url_for("public.home"))

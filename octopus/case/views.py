# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for
from flask.ext.login import login_required, current_user
from sqlalchemy import or_
from octopus.case.forms import NewCaseForm
from octopus.case.utils import create_query

from octopus.extensions import nav, db
from octopus.case.models import Region, CaseType, Case, case_assignments
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
                             CaseType.id.label("Case Type"),
                             Case.start_date.label("Start"),
                             Case.end_date.label("End")
    ).join(CaseType).order_by(Case.id.desc())
    extra_cols = [
        {'header': {'text': "View/Edit"},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('case.view', id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-primary btn-sm'},
             {'func': lambda x: url_for('case.edit', id=getattr(x, 'ID')),
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
    q = db.session.query(Case.id.label("ID"),
                             Case.crd_number.label("CRD #"),
                             Case.case_name.label("Name"),
                             CaseType.id.label("Case Type"),
                             Case.start_date.label("Start"),
                             Case.end_date.label("End")
    ).join(CaseType).order_by(Case.id.desc())
    extra_cols = [
        {'header': {'text': "View/Edit"},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('case.view', id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-primary btn-sm'},
             {'func': lambda x: url_for('case.edit', id=getattr(x, 'ID')),
              'text': 'Edit',
              'type': 'button',
              'class': 'btn btn-warning btn-sm'}
         ]
        }
    ]
    valid, q = create_query(request.args, q)

    if valid:
        return render_template("case/query.html", cases=q, extra_cols=extra_cols)
    else:
        flash("Invalid Query")
        return redirect(url_for("case/dashboard.html"))


@blueprint.route('/view/<int:id>')
@login_required
def view(id):
    case = db.session.query(Case.id.label("ID"),
                             Case.crd_number.label("CRD #"),
                             Case.case_name.label("Name"),
                             CaseType.id.label("Case Type"),
                             Region.id.label("Region"),
                             Case.case_desc.label("Description"),
                             Case.start_date.label("Start"),
                             Case.end_date.label("End")
    ).filter(Case.id == id).join(Region, CaseType)
    return render_template('case/case.html', case=case)

@blueprint.route("/new", methods=["GET", "POST"])
@login_required
def new():
    form = NewCaseForm(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            case_type = CaseType.query.get(form.case_type.data)
            region = Region.query.get(form.case_region.data)
            case = Case.create(crd_number=form.crd_number.data,
                                  case_name=form.case_name.data,
                                  case_desc=form.case_desc.data,
                                  start_date=form.start_date.data,
                                  end_date=form.end_date.data,
                                  case_type=case_type,
                                  region=region)
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

# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, \
  url_for, abort, json
from flask.ext.login import login_required

from octopus.case import queries
from octopus.case.forms import EditCoreCaseForm, NewCaseForm, CaseTagsForm, \
  CaseStaffForm, CaseFileForm, PageDownForm
from octopus.case.utils import create_query
from octopus.extensions import nav, db
from octopus.models import CaseType, Case, Tag
from octopus.utils import flash_errors, user_on_case, admin_required


blueprint = Blueprint("case", __name__, url_prefix='/case',
                      static_folder="../static")

nav.Bar('case_admin', [
  nav.Item('<i class="fa fa-briefcase fa-lg"></i>', '',
           html_attrs=str("data-placement='bottom',\
          title='Cases'"
           ),

           items=[
             nav.Item('My Cases', 'case.query', args={'user_id': 'me'}),
             nav.Item('All Cases', 'case.all_cases'),
             nav.Item('Create New Case', 'case.new')
           ]
  )
])

nav.Bar('case', [
  nav.Item('<i class="fa fa-briefcase fa-lg"></i>', '',
           html_attrs=str("data-placement='bottom',\
          title='Cases'"
           ),

           items=[
             nav.Item('My Cases', 'case.query', args={'user_id': 'me'}),
             nav.Item('Create New Case', 'case.new')
           ]
  )
])


@blueprint.route("/all_cases")
@login_required
@admin_required
def all_cases():
  cases = db.session.query(Case.id.label("ID"),
                           Case.crd_number.label("CRD #"),
                           Case.case_name.label("Name"),
                           CaseType.code.label("Case Type"),
                           Case.start_date.label("Start"),
                           Case.end_date.label("End")
  ).join(CaseType).order_by(Case.id.desc())

  view_url = {'func': lambda x: url_for('case.view', case_id=getattr(x, 'ID'))}

  return render_template("case/all_cases.html", cases=cases,
                         view_url=view_url)


@blueprint.route("/query")
@login_required
def query():
  q = db.session.query(Case.id.label("ID"),
                       Case.crd_number.label("CRD #"),
                       Case.case_name.label("Name"),
                       CaseType.code.label("Case Type"),
                       Case.start_date.label("Start"),
                       Case.end_date.label("End")
  ).join(CaseType).order_by(Case.id.desc())

  view_url = {'func': lambda x: url_for('case.view', case_id=getattr(x, 'ID'))}

  valid, q = create_query(request.args, q)

  if valid:
    return render_template("case/query.html", cases=q,
                           view_url=view_url)
  else:
    flash("Invalid Query")
    return redirect(url_for('public.home'))


@blueprint.route('/view/<int:case_id>')
@login_required
@user_on_case
def view(case_id=0):
  lead, staff, tasks = queries.single_case_staff(case_id)
  case = Case.get_by_id(case_id)
  if not case:
    abort(404)

  return render_template('case/case.html', case=case, lead=lead, staff=staff,
                         tasks=tasks)


@blueprint.route("/new", methods=["GET", "POST"])
@login_required
def new():
  form = NewCaseForm(request.form)
  if request.method == 'POST':
    if form.validate_on_submit():
      case = form.commit_new_case()
      flash("New Case Created")
      return redirect(url_for('case.view', case_id=case.id))
    else:
      flash_errors(form)
  return render_template("case/new.html", form=form)


@blueprint.route("/edit/<int:case_id>", methods=["GET", "POST"])
@login_required
@user_on_case
def edit(case_id):
  edit_form = request.args.get('edit_form')
  ret = []

  if edit_form == 'core':
    form = EditCoreCaseForm(case_id, request.form)
    ret = render_template('case/new.html', form=form, case_id=case_id)
  elif edit_form == 'case_desc':
    form = PageDownForm(case_id, 'case_desc', request.form)
    field_name = 'Edit Case Description'
    ret = render_template('markdown/edit_form.html', form=form, case_id=case_id,
                          field_name=field_name)
  elif edit_form == 'risk_tags':
    form = CaseTagsForm(case_id, 'risk', request.form)
    tags = json.dumps([{"name": unicode(i.tag)} for i in
                       Tag.query.filter(Tag.kind == 'risk')])
    ret = render_template('case/case_tags.html', form=form, case_id=case_id,
                          tags=tags)
  elif edit_form == 'case_staff':
    form = CaseStaffForm(case_id, request.form)
    ret = render_template('case/case_staff.html', form=form,
                          case_id=case_id)
  elif edit_form == 'non_qau_staff':
    form = CaseTagsForm(case_id, 'non_qau_staff', request.form)
    tags = json.dumps([{"name": unicode(i.tag)} for i in
                       Tag.query.filter(Tag.kind == 'non_qau_staff')])
    ret = render_template('case/case_tags.html', form=form, case_id=case_id,
                          tags=tags)
  elif edit_form == 'case_file':
    file_id = request.args.get('file_id')
    if not file_id:
      file_id = None
    form = CaseFileForm(case_id, file_id, request.form)
    ret = render_template('case/case_file.html', form=form, file_id=file_id)

  else:
    flash_errors(edit_form)

  return ret

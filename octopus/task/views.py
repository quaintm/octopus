# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for, abort, json
from flask.ext.login import login_required, current_user

from octopus.case import queries
from octopus.case.forms import EditCoreCaseForm, NewCaseForm, CaseTagsForm, CaseStaffForm, CaseFileForm
from octopus.case.utils import create_query
from octopus.extensions import nav, db
from octopus.models import CaseType, Case, Tag, Task
from octopus.utils import flash_errors, user_on_case


blueprint = Blueprint("task", __name__, url_prefix='/task',
                      static_folder="../static")

nav.Bar('task', [
    nav.Item('<i class="fa fa-tasks fa-lg"></i>', '', 
        html_attrs=str("data-placement='bottom',\
                    title='Tasks'"
        ),

      items=[
        nav.Item('My Tasks', 'task.query', args={'user_id': 'me'}),
        nav.Item('All Tasks', 'task.all_tasks'),
        nav.Item('Create New Task', 'task.new')
        ]
    )
])


@blueprint.route("/all_tasks")
@login_required
def all_tasks():
    cases = db.session.query(Task.id.label("ID"),
                             Task.task_name.label("Name"),
                             Task.start_date.label("Start"),
                             Task.end_date.label("End")

    ).order_by(Task.id.desc())

    extra_cols = [
        {'header': {'text': ""},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('case.view', case_id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-sm btn-default center-block'}
         ]
        }
    ]
    # get list of cases user has permission to view
    if current_user.is_admin:
        case_perm = ['admin']
    else:
        cp = db.session.query(Case.id). \
            filter(Case.users.contains(current_user)).all()
        case_perm = [item for sublist in [i._asdict().values() for i in cp] for item in sublist]

    return render_template("case/all_cases.html", cases=cases,
                           extra_cols=extra_cols, case_perm=case_perm)


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
    extra_cols = [
        {'header': {'text': ""},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('case.view', case_id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-default btn-sm center-block'}
         ]}
    ]
    valid, q = create_query(request.args, q)
    # get list of cases user has permission to view
    if current_user.is_admin:
        case_perm = ['admin']
    else:
        cp = db.session.query(Case.id). \
            filter(Case.users.contains(current_user)).all()
        case_perm = [item for sublist in [i._asdict().values() for i in cp] for item in sublist]

    if valid:
        return render_template("case/query.html", cases=q, extra_cols=extra_cols, case_perm=case_perm)
    else:
        flash("Invalid Query")
        return redirect(url_for('public.home'))


@blueprint.route('/view/<int:case_id>')
@login_required
@user_on_case
def view(case_id=0):
    lead, staff = queries.single_case_staff(case_id)
    case = Case.get_by_id(case_id)
    if not case:
        abort(404)

    return render_template('case/case.html', case=case, lead=lead, staff=staff)


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
def edit(task_id):
    edit_form = request.args.get('edit_form')

    if edit_form == 'core':
        form = EditCoreCaseForm(case_id, request.form)
        ret = render_template('case/new.html', form=form, case_id=case_id)
    elif edit_form == 'risk_tags':
        form = CaseTagsForm(case_id, 'risk', request.form)
        tags = json.dumps([{"name": unicode(i.tag)} for i in Tag.query.filter(Tag.kind == 'risk')])
        ret = render_template('case/case_tags.html', form=form, case_id=case_id, tags=tags)
    elif edit_form == 'case_staff': 
        form = CaseStaffForm(case_id, request.form)
        ret = render_template('case/case_staff.html', form=form, case_id=case_id)
    elif edit_form == 'non_qau_staff':
        form = CaseTagsForm(case_id, 'non_qau_staff', request.form)
        tags = json.dumps([{"name": unicode(i.tag)} for i in Tag.query.filter(Tag.kind == 'non_qau_staff')])
        ret = render_template('case/case_tags.html', form=form, case_id=case_id, tags=tags)
    elif edit_form == 'case_file':
        file_id = request.args.get('file_id')
        if not file_id:
            file_id = None
        form = CaseFileForm(case_id, file_id, request.form)
        ret = render_template('case/case_file.html', form=form, file_id=file_id)

    else:
        abort(404)

    if request.method == 'POST':
        if form.validate_on_submit():
            form.commit_updates()
            flash('Entries Updated', category='success')
            return redirect(url_for('case.view', case_id=case_id))
        else:
            flash_errors(form)

    return ret



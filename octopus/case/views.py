# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, url_for, abort, jsonify, json
from flask.ext.login import login_required, current_user
from sqlalchemy import or_
from octopus.case import queries
from octopus.case.forms import EditCoreCaseForm, NewCaseForm, CaseTagsForm
from octopus.case.utils import create_query

from octopus.extensions import nav, db
from octopus.case.models import Region, CaseType, Case, case_staff_map, Tag
from octopus.user.forms import EditUserProfile, save_profile_edits
from octopus.utils import flash_errors


blueprint = Blueprint("case", __name__, url_prefix='/case',
                      static_folder="../static")

nav.Bar('case', [
    nav.Item('<i class="fa fa-briefcase"></i>', '', items=[
        nav.Item('My Cases', 'case.query', args={'user_id': 'me'}),
        nav.Item('All Cases', 'case.all_cases'),
        nav.Item('Create New Case', 'case.new')
    ])
])


# @blueprint.route("/")
@blueprint.route("/all_cases")
def all_cases():
    cases = db.session.query(Case.id.label("ID"),
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
              'class': 'btn btn-primary btn-sm'}
         ]
        }
    ]
    return render_template("case/all_cases.html", cases=cases, extra_cols=extra_cols)


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
              'class': 'btn btn-primary btn-sm'}
         ]}
    ]
    valid, q = create_query(request.args, q)

    if valid:
        return render_template("case/query.html", cases=q, extra_cols=extra_cols)
    else:
        flash("Invalid Query")
        return redirect(url_for('public.home'))


@blueprint.route('/view/<int:case_id>')
@login_required
def view(case_id):
    case = queries.single_case_view(case_id)
    if not case:
        abort(404)
    return render_template('case/case.html', case=case)


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

@blueprint.route("/tags/<int:case_id>")
@blueprint.route("/tags")
@login_required
def get_tags(case_id=None):
    tag_type = request.args.get('tag_type')

    if tag_type == 'risk_tags':
        if case_id:
            return jsonify(json_list=Case.get_by_id(case_id).tags.filter(Tag.kind=='risk').all())
        else:
            return json.dumps([i.tag for i in Tag.query])
    else:
        return json.dumps(['nada'])


@blueprint.route("/edit/<int:case_id>", methods=["GET", "POST"])
@login_required
def edit(case_id):
    edit_form = request.args.get('edit_form')

    if edit_form == 'core':
        form = EditCoreCaseForm(case_id, request.form)
        ret = render_template('case/new.html', form=form, case_id=case_id)
    elif edit_form == 'tags':
        form = CaseTagsForm(case_id, request.form)
        ret = render_template('case/case_tags.html', form=form, case_id=case_id)
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



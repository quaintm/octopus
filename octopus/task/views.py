# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, \
    url_for, abort
from flask.ext.login import login_required, current_user

# from octopus.task import queries
from octopus.task.forms import (EditCoreTaskForm, NewTaskForm
                                # , TaskStaffForm
                                )
from octopus.case.utils import create_query
from octopus.extensions import nav, db
from octopus.models import Task
from octopus.utils import flash_errors, user_on_case


blueprint = Blueprint("task", __name__, url_prefix='/task',
                      static_folder="../static")

nav.Bar('task', [
    nav.Item('<i class="fa fa-tasks fa-lg"></i>', '',
             html_attrs=str("data-placement='bottom',\
                             title='Tasks'"
                            ),
             items=[nav.Item('My Tasks', 'task.query', args={'user_id': 'me'}),
                    nav.Item('All Tasks', 'task.all_tasks'),
                    nav.Item('Create New Task', 'task.new')]
             )
])


@blueprint.route("/all_tasks")
@login_required
def all_tasks():
    tasks = db.session.query(Task.id.label("ID"),
                             Task.task_name.label("Name"),
                             Task.start_date.label("Start"),
                             Task.end_date.label("End")
                             ).order_by(Task.id.desc())

    extra_cols = [
        {'header': {'text': ""},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('task.view', task_id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-sm btn-default center-block'}
         ]
         }
    ]
    # get list of cases user has permission to view ---- NEED TO CHANGE TO
    # THREE-LAYER TASK AUTH
    # if current_user.is_admin:
    # item_perm = ['admin']
    # else:
    #     cp = db.session.query(Task.id). \
    #         filter(Task.assignees.contains(current_user)).all()
    #     item_perm = [item for sublist in [i._asdict().values() for i in cp]
    #                  for item in sublist]

    return render_template("task/all_tasks.html", tasks=tasks,
                           extra_cols=extra_cols
                           # , item_perm=item_perm
                           )


@blueprint.route("/query")
@login_required
def query():
    q = db.session.query(Task.id.label("ID"),
                         Task.task_name.label("Name"),
                         Task.start_date.label("Start"),
                         Task.end_date.label("End")
                         ).order_by(Task.id.desc())
    extra_cols = [
        {'header': {'text': ""},
         'td-class': 'text-center',
         'contents': [
             {'func': lambda x: url_for('task.view', task_id=getattr(x, 'ID')),
              'text': 'View',
              'type': 'button',
              'class': 'btn btn-default btn-sm center-block'}
         ]}
    ]
    valid, q = create_query(request.args, q)
    # get list of cases user has permission to view ----- NEED TASK AUTH
    if current_user.is_admin:
        item_perm = ['admin']
    else:
        cp = db.session.query(Task.id). \
            filter(Task.assignees.contains(current_user)).all()
        item_perm = [item for sublist in [i._asdict().values() for i in cp]
                     for item in sublist]

    if valid:
        return render_template("task/query.html", tasks=q,
                               extra_cols=extra_cols, item_perm=item_perm)
    else:
        flash("Invalid Query")
        return redirect(url_for('public.home'))


# # ######### ???? TODO: Fix this form
# @blueprint.route('/view/<int:task_id>')
# @login_required
# @user_on_case
# def view(task_id=0):
# lead, staff = queries.single_case_staff(task_id)
# task = Task.get_by_id(task_id)
# if not task:
# abort(404)
#
# return render_template('task/task.html', task=task, lead=lead, staff=staff)


@blueprint.route("/new", methods=["GET", "POST"])
@login_required
def new():
    form = NewTaskForm(request.form)
    if request.method == 'POST':
        if form.validate_on_submit():
            task = form.commit_new_task()
            flash("New Task Created")
            return redirect(url_for('task.view', task_id=task.id))
        else:
            flash_errors(form)
    return render_template("task/new.html", form=form)


@blueprint.route("/edit/<int:task_id>", methods=["GET", "POST"])
@login_required
@user_on_case
def edit(task_id):
    edit_form = request.args.get('edit_form')

    if edit_form == 'core':
        form = EditCoreTaskForm(task_id, request.form)
        ret = render_template('task/new.html', form=form, task_id=task_id)
        # elif edit_form == 'task_staff':
        # form = TaskStaffForm(task_id, request.form)
        # ret = render_template('task/task_staff.html',
        # form=form, case_id=case_id)

        if request.method == 'POST':
            if form.validate_on_submit():
                form.commit_updates()
                flash('Entries Updated', category='success')
                return redirect(url_for('task.view', task_id=task_id))
            else:
                flash_errors(form)
        return ret

    else:
        abort(404)
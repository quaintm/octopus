# -*- coding: utf-8 -*-
from flask import Blueprint, render_template, request, redirect, flash, \
  url_for, abort
from flask.ext.login import login_required
# from octopus.task import queries
from octopus.task.forms import (EditCoreTaskForm, NewTaskForm)
from octopus.task.utils import create_query
from octopus.extensions import nav, db
from octopus.models import Task, User, Case
from octopus.utils import flash_errors, admin_required, user_on_task


blueprint = Blueprint("task", __name__, url_prefix='/task',
                      static_folder="../static")

nav_submenu_items_admin = [nav.Item('My Assigned Tasks', 'task.query',
                                    args={'user_id': 'me', 'type': 'assigned'}),
                           nav.Item('My Created Tasks', 'task.query',
                                    args={'user_id': 'me', 'type': 'created'}),
                           nav.Item('All Tasks', 'task.all_tasks'),
                           nav.Item('Create New Task', 'task.new')]

nav_submenu_items = [nav.Item('My Assigned Tasks', 'task.query',
                              args={'user_id': 'me', 'type': 'assigned'}),
                     nav.Item('My Created Tasks', 'task.query',
                              args={'user_id': 'me', 'type': 'created'}),
                     nav.Item('Create New Task', 'task.new')]

nav.Bar('task_admin', [
  nav.Item('<i class="fa fa-tasks fa-lg"></i>', '',
           html_attrs=str("data-placement='bottom',\
               title='Tasks'"
           ),
           items=nav_submenu_items_admin
  )
])

nav.Bar('task', [
  nav.Item('<i class="fa fa-tasks fa-lg"></i>', '',
           html_attrs=str("data-placement='bottom',\
               title='Tasks'"
           ),
           items=nav_submenu_items
  )
])


# all tasks now only available to admins
@blueprint.route("/all_tasks")
@login_required
@admin_required
def all_tasks():
  tasks = db.session.query(Task.id.label("ID"),
                           Task.task_name.label("Name"),
                           Task.start_date.label("Start"),
                           Task.end_date.label("End"),
                           Case.case_name.label("Parent Case")
                           ).join(Case).order_by(Task.id.desc())

  view_url = {'func': lambda x: url_for('task.view', task_id=getattr(x, 'ID'))}

  return render_template("task/all_tasks.html", tasks=tasks,
                         view_url=view_url
  )


@blueprint.route("/query")
@login_required
def query():
  q = db.session.query(Task.id.label("ID"),
                       Task.task_name.label("Name"),
                       Task.start_date.label("Start"),
                       Task.end_date.label("End"),
                       Case.case_name.label("Parent Case")
  ).join(Case).order_by(Task.id.desc())
  view_url = {'func': lambda x: url_for('task.view', task_id=getattr(x, 'ID'))}

  valid, q, title = create_query(request.args, q)

  if valid:
    return render_template("task/query.html", tasks=q, view_url=view_url,
                           title=title)
  else:
    flash("Invalid Query")
    return redirect(url_for('public.home'))


@blueprint.route('/view/<int:task_id>')
@login_required
@user_on_task
def view(task_id=0):
  task = Task.get_by_id(task_id)
  creator = User.get_by_id(task.creator_id)
  parent = Case.get_by_id(task.case_id)
  if not task:
    abort(404)

  return render_template('task/task.html', task=task, creator=creator,
                         parent=parent)


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
@user_on_task
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
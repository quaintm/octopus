from flask import request
from flask.ext.login import current_user
from flask_wtf import Form
from wtforms import StringField, TextAreaField, \
  SelectMultipleField, SelectField
from wtforms.validators import DataRequired, Optional
from wtforms.fields.html5 import DateField

# from octopus.task.queries import single_task_staff

from octopus.models import User, Task, Case
# from octopus.extensions import db


class NewTaskForm(Form):
  task_name = StringField('Task Name', validators=[DataRequired()])
  task_desc = TextAreaField('Task Description', validators=[Optional()])
  start_date = DateField('Start Date',
                         validators=[DataRequired()])
  end_date = DateField('End Date', validators=[Optional()])

  parent_case = SelectField('Assign Task to Case', validators=[Optional()])

  assignees = SelectMultipleField(label='Assign Staff',
                                  validators=[Optional()], coerce=int)

  def __init__(self, *args, **kwargs):
    super(NewTaskForm, self).__init__(*args, **kwargs)
    self.assignees.choices = [(i.id, i.username) for i in User.query]
    self.parent_case.choices = [(unicode(i.id), i.case_name) for i in
                                Case.query]

  def validate(self):
    initial_validation = super(NewTaskForm, self).validate()
    if not initial_validation:
      return False
    return True

  def commit_new_task(self):
    task = Task.create(task_name=self.task_name.data,
                       task_desc=self.task_desc.data,
                       start_date=self.start_date.data,
                       end_date=self.end_date.data,
                       case_id=int(self.parent_case.data),
                       creator_id=current_user.id
    )

    assigned_users = []
    for i in self.assignees.data:
      assigned_users.append(User.get_by_id(i))

    task.assignees = assigned_users
    task.save()

    return task


class EditCoreTaskForm(Form):
  task_name = StringField('Task Name', validators=[Optional()])
  task_desc = TextAreaField('Task Description')
  start_date = DateField('Start Date',
                         validators=[Optional()])
  end_date = DateField('End Date', validators=[Optional()])
  parent_case = SelectField('Parent Case', validators=[Optional()])
  assignees = SelectMultipleField('Assigned Staff',
                                  validators=[Optional()], coerce=int)

  def __init__(self, task_id, *args, **kwargs):
    super(EditCoreTaskForm, self).__init__(*args, **kwargs)

    self.task_id = task_id
    self.current_task = Task.get_by_id(self.task_id)

    self.parent_case.choices = [(unicode(i.id), i.case_name) for i in
                                Case.query]
    self.assignees.choices = [(i.id, i.username) for i in User.query]

    if request.method != 'POST':
      self.assignees.default = [unicode(i.id) for i in
                                self.current_task.assignees]
      self.parent_case.default = self.current_task.case_id

      self.process()

      # TODO: Current start and end date values not populating
      self.start_date.data = self.current_task.start_date
      self.end_date.data = self.current_task.end_date
      self.task_name.data = self.current_task.task_name
      self.task_desc.data = self.current_task.task_desc

  def validate(self):
    initial_validation = super(EditCoreTaskForm, self).validate()
    if not initial_validation:
      return False
    return True

  def commit_updates(self):
    if self.task_name.data:
      self.current_task.task_name = self.task_name.data
    if self.task_desc.data:
      self.current_task.task_desc = self.task_desc.data
    if self.start_date.data:
      self.current_task.start_date = self.start_date.data
    if self.end_date.data:
      self.current_task.end_date = self.end_date.data
    if self.parent_case.data:
      self.current_task.case_id = self.parent_case.data

    assigned_users = []
    if self.assignees.data:
      for i in self.assignees.data:
        assigned_users.append(User.get_by_id(i))

      self.current_task.assignees = assigned_users

    self.current_task.save()
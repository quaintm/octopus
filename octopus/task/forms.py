# from flask import request
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

    # task.assignees = self.assignees.data
    # task.save()

    return task


class EditCoreTaskForm(Form):
  task_name = StringField('Task Name', validators=[Optional()])
  task_desc = TextAreaField('Task Description')
  start_date = DateField('Start Date',
                         validators=[Optional()])
  end_date = DateField('End Date', validators=[Optional()])

  def __init__(self, task_id, *args, **kwargs):
    super(EditCoreTaskForm, self).__init__(*args, **kwargs)
    self.task_id = task_id
    self.current_task = Task.get_by_id(self.task_id)

    self.task_name.data = self.current_task.task_name
    self.task_desc.data = self.current_task.task_desc
    self.start_date.data = self.current_task.start_date
    self.end_date.data = self.current_task.end_date

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

    self.current_task.save()


class TaskStaffForm(Form):
  contractors = SelectMultipleField(label='QAU Contractor Resources',
                                    validators=[Optional()], coerce=int)
  qau_staff = SelectMultipleField(label='QAU Full Time Resources',
                                  validators=[Optional()], coerce=int)

  def __init__(self, case_id, *args, **kwargs):
    super(TaskStaffForm, self).__init__(*args, **kwargs)
    self.case_id = case_id

    self.contractors.choices = [(i.id, i.username) for i in User.query
                                if i.is_contractor]
    self.qau_staff.choices = [(i.id, i.username) for i in User.query
                              if i.is_permanent]

    # if request.method != 'POST':
    # staff = db.session.query(User). \
    # join('user_cases', 'case'). \
    #     filter(User.user_cases.any(case_id=case_id)). \
    #     filter(CaseStaffMap.primary == 0).all()
    #
    # self.contractors.default = [unicode(i.id) for i in staff
    # if i.is_contractor]
    # self.qau_staff.default = [unicode(i.id) for i in staff
    # if i.is_permanent]
    # self.process()

  def validate(self):
    initial_validation = super(TaskStaffForm, self).validate()
    if not initial_validation:
      return False
    return True

  @staticmethod
  def commit_updates():
    # task = Task.get_by_id(self.case_id)

    # staff = db.session.query(User). \
    # join('user_cases', 'case'). \
    # filter(User.user_cases.any(case_id=self.case_id)).all()

    # # set of previously assigned users
    # prev_assigned = set([i.id for i in staff])
    # # set of what the new assignment should be
    # all_assigned = set(self.contractors.data + self.qau_staff.data)
    # # set of to be removed entries
    # prev_assigned_remove = prev_assigned.difference(all_assigned)
    # # set of all the new users added to the case
    # new_assigned_add = all_assigned.difference(prev_assigned)

    # start removing the old entries
    # for user_id in prev_assigned_remove:
    #   user = User.get_by_id(user_id)
    #   case.users.remove(user)
    # case.save()
    #
    # # add in the new changes
    # for user_id in new_assigned_add:
    #   user = User.get_by_id(user_id)
    #   # at some point we will need to toggle primary or not,
    # this is how you set that flag
    #   CaseStaffMap.create(user=user, case=case).save()

    return None

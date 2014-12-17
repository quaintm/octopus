from octopus.models import User
from octopus.extensions import db


def single_task_staff(task_id):
  creator = db.session.query(User). \
    filter(User.created_tasks.any(task_id=task_id)).all()

  assignees = db.session.query(User). \
    filter(User.tasks.any(task_id=task_id)).all()
  return creator, assignees
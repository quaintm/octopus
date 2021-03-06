from flask import flash
from flask.ext.login import current_user

from octopus.models import User, Task


def create_query(args, q):
  valid = True
  user_id = args.get('user_id')
  type = args.get('type')
  if user_id:

    if user_id == "me":
      user = User.get_by_id(current_user.id)
    else:
      try:
        user_id = int(user_id)
        user = User.get_by_id(user_id)
      except ValueError:
        flash('Invalid User Id Entered')
        valid = False
    if valid:
      if type == 'assigned':
        q = q.filter(Task.assignees.any(id=user.id))
        title = "My Assigned Tasks"

      elif type == 'created':
        q = q.filter(Task.creator_id==user.id)
        title = "My Created Tasks"

      else:
        None
        title = "Query Results"

  return valid, q, title


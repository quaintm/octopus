from octopus.models import User
from octopus.extensions import db


def single_task_staff(task_id):
  creator = db.session.query(User).\
                    join('user_cases', 'case').\
                    filter(User.user_cases.any(case_id=case_id)).\
                    filter(CaseStaffMap.primary == 1).all()

  assignees = db.session.query(User).\
                    join('user_cases', 'case').\
                    filter(User.user_cases.any(case_id=case_id)).\
                    filter(CaseStaffMap.primary == 0).all()
  return lead, staff
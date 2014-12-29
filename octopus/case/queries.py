from octopus.models import CaseStaffMap, User, Task
from octopus.extensions import db


def single_case_staff(case_id):
  lead = db.session.query(User). \
    join('user_cases', 'case'). \
    filter(User.user_cases.any(case_id=case_id)). \
    filter(CaseStaffMap.primary == 1).all()

  staff = db.session.query(User). \
    join('user_cases', 'case'). \
    filter(User.user_cases.any(case_id=case_id)). \
    filter(CaseStaffMap.primary == 0).all()

  tasks = db.session.query(Task). \
    filter(Task.case_id==case_id).all()
  return lead, staff, tasks
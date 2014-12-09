from octopus.case.models import Case, CaseType, Region, CaseStaffMap
from octopus.user.models import User
from octopus.extensions import db


def single_case_view(case_id):
  query = db.session.query(Case.id,
                           Case.crd_number,
                           Case.case_name,
                           CaseType.code.label('case_type'),
                           Region.code.label('region'),
                           Case.case_desc,
                           Case.start_date,
                           Case.end_date).filter(
                             Case.id == case_id).join(Region, CaseType).first()
  return query

def single_case_staff(case_id):
  lead = db.session.query(User).\
                    join('user_cases', 'case').\
                    filter(User.user_cases.any(case_id=case_id)).\
                    filter(CaseStaffMap.primary == 1).all()

  staff = db.session.query(User).\
                    join('user_cases', 'case').\
                    filter(User.user_cases.any(case_id=case_id)).\
                    filter(CaseStaffMap.primary == 0).all()
  return lead, staff
from octopus.case.models import Case, CaseType, Region, case_staff_map
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
  query = db.session.query(User.full_name,
                           case_staff_map.c.is_admin).\
                    join('user_cases', 'case').\
                    filter(User.case_staff_map.any(case_id=case_id)).all()
  return query
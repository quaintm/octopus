from octopus.case.models import Case, CaseType, Region
from octopus.extensions import db

__author__ = 'wjm'


def single_case_view(case_id):
    query = db.session.query(Case.id,
                             Case.crd_number,
                             Case.case_name,
                             CaseType.id.label('case_type_id'),
                             Region.id.label('region_id'),
                             Case.case_desc,
                             Case.start_date,
                             Case.end_date).filter(Case.id == case_id).join(Region, CaseType).first()
    return query
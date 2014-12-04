# -*- coding: utf-8 -*-
import datetime as dt

from flask.ext.login import UserMixin

from octopus.extensions import bcrypt
from octopus.database import (
    Column,
    db,
    Model,
    ReferenceCol,
    relationship,
    SurrogatePK,
)


class CaseType(SurrogatePK, Model):
    __tablename__ = 'case_types'
    code = Column(db.String(15), unique=True, nullable=False)
    description = Column(db.String(80), unique=True, nullable=False)

    def __init__(self, name, **kwargs):
        db.Model.__init__(self, name=name, **kwargs)

    def __repr__(self):
        return '<CaseType (code={code}, description={desc})>'.format(code=self.code, desc=self.description)


class Region(SurrogatePK, Model):
    __tablename__ = 'regions'
    code = Column(db.String(4), unique=True, primary_key=True, nullable=False)
    name = Column(db.String(80), unique=True, nullable=False)
    address = Column(db.String(120), unique=False, nullable=False)
    city = Column(db.String(80), unique=False, nullable=False)
    state = Column(db.String(2), unique=False, nullable=False)
    zip = Column(db.String(15), unique=True, nullable=False)
    phone = Column(db.String(15), unique=True, nullable=False)

    def __init__(self, **kwargs):
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        return '<Region(code={code})>'.format(code=self.code)


class RiskTags(Model):
    __tablename__ = 'risk_tags'
    id = Column(db.String(4), unique=True, primary_key=True, nullable=False)
    tag = Column(db.Text(), unique=True)

    def __init__(self, **kwargs):
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        return '<RiskTag({name})>'.format(name=self.tag)


case_risk_tags = db.Table('case_risk_tags',
                          db.Column('risk_tag_id', db.Integer, db.ForeignKey('risk_tags.id')),
                          db.Column('case_id', db.Integer, db.ForeignKey('cases.id')))

case_assignments = db.Table('case_assignments',
                            db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
                            db.Column('case_id', db.Integer, db.ForeignKey('cases.id')),
                            db.Column('primary', db.Boolean, default=False),
                            db.Column('secondary', db.Boolean, default=False))


class Case(SurrogatePK, Model):
    __tablename__ = 'cases'
    crd_number = Column(db.Integer(), unique=False, nullable=False)
    case_name = Column(db.Text(), unique=False, nullable=True)
    case_desc = Column(db.Text(), unique=False, nullable=True)
    start_date = Column(db.Date(), unique=False, nullable=False)
    end_date = Column(db.Date(), unique=False, nullable=True)

    case_type_id = ReferenceCol('case_types', nullable=False)
    case_type = relationship('CaseType', backref='case_types')

    region_id = ReferenceCol('regions', nullable=False)
    region = relationship('Region', backref='regions')

    staff_id = db.relationship('User', secondary=case_assignments,
                                backref=db.backref('cases', lazy='dynamic'))

    mars_risk_score = Column(db.Integer, unique=False, nullable=True)
    qau_risk_score = Column(db.Integer, unique=False, nullable=True)
    examiner_risk_score = Column(db.Integer, unique=False, nullable=True)
    risk_tag_id = db.relationship('RiskTags', secondary=case_risk_tags,
                                  backref=db.backref('cases', lazy='dynamic'))

    def __init__(self, *args, **kwargs):
        db.Model.__init__(self, *args, **kwargs)

    def __repr__(self):
        return '<Case({id!r})>'.format(id=self.id)

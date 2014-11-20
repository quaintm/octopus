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


class CaseType(Model):
    __tablename__ = 'case_types'
    id = Column(db.String(15), unique=True, primary_key=True, nullable=False)
    description = Column(db.String(80), unique=True, nullable=False)

    def __init__(self, name, **kwargs):
        db.Model.__init__(self, name=name, **kwargs)

    def __repr__(self):
        return '<CaseType (code={code}, description={desc})>'.format(name=self.code, desc=self.description)


class Region(Model):
    __tablename__ = 'regions'
    id = Column(db.String(4), unique=True, primary_key=True, nullable=False)
    name = Column(db.String(80), unique=True, nullable=False)
    address = Column(db.String(120), unique=False, nullable=False)
    city = Column(db.String(80), unique=False, nullable=False)
    state = Column(db.String(2), unique=False, nullable=False)
    zip = Column(db.String(15), unique=True, nullable=False)
    phone = Column(db.String(15), unique=True, nullable=False)

    def __init__(self, **kwargs):
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        return '<Region({code})>'.format(name=self.id)


class RiskTags(Model):
    __tablename__ = 'risk_tags'
    id = Column(db.String(4), unique=True, primary_key=True, nullable=False)
    tag = Column(db.Text(), unique=True)

    def __init__(self, **kwargs):
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        return '<RiskTag({code})>'.format(name=self.code)


case_risk_tags = db.Table('case_risk_tags',
                          db.Column('risk_tag_id', db.Integer, db.ForeignKey('risk_tags.id')),
                          db.Column('case_id', db.Integer, db.ForeignKey('cases.id')))

case_assignments = db.Table('case_assignments',
                            db.Column('user_id', db.Integer, db.ForeignKey('users.id')),
                            db.Column('case_id', db.Integer, db.ForeignKey('cases.id')))


class Case(SurrogatePK, Model):
    __tablename__ = 'cases'
    crd_number = Column(db.Integer(), unique=False, nullable=False)
    case_name = Column(db.Text(), unique=False, nullable=False)
    case_desc = Column(db.Text(), unique=False, nullable=False)
    start_date = Column(db.Date(), unique=False, nullable=False)
    end_date = Column(db.Date(), unique=False, nullable=True)

    case_type_id = ReferenceCol('case_types', nullable=False)
    case_type = relationship('CaseType', backref='case_type')

    region_id = ReferenceCol('regions', nullable=False)
    region = relationship('Region', backref='region')

    primary_id = ReferenceCol('users', nullable=False)
    primary = relationship('User', foreign_keys=[primary_id])

    secondary_id = ReferenceCol('users', nullable=False)
    secondary = relationship('User', foreign_keys=[secondary_id])

    other_staff_id = db.relationship('User', secondary=case_assignments,
                                     backref=db.backref('cases', lazy='dynamic'))

    mars_risk_score = Column(db.Integer, unique=False, nullable=True)
    qau_risk_score = Column(db.Integer, unique=False, nullable=True)
    examiner_risk_score = Column(db.Integer, unique=False, nullable=True)
    risk_tag_id = db.relationship('RiskTags', secondary=case_risk_tags,
                                  backref=db.backref('cases', lazy='dynamic'))

    def __init__(self, username, email, password=None, **kwargs):
        db.Model.__init__(self, username=username, email=email, **kwargs)
        if password:
            self.set_password(password)
        else:
            self.password = None

    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password)

    def check_password(self, value):
        return bcrypt.check_password_hash(self.password, value)

    @property
    def full_name(self):
        return "{0} {1}".format(self.first_name, self.last_name)

    def __repr__(self):
        return '<User({username!r})>'.format(username=self.username)

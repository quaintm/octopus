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
    SurrogatePK
)


class CaseType(SurrogatePK, Model):
    __tablename__ = 'case_types'
    code = Column(db.String(15), unique=True, nullable=False, index=True)
    description = Column(db.String(80), nullable=False, index=True)

    def __init__(self, name, **kwargs):
        db.Model.__init__(self, name=name, **kwargs)

    def __repr__(self):
        return '<CaseType (code={code}, description={desc})>'.format(code=self.code, desc=self.description)


class Region(SurrogatePK, Model):
    __tablename__ = 'regions'
    code = Column(db.String(4), unique=True, nullable=False)
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


class Tag(SurrogatePK, Model):
    __tablename__ = 'tags'
    kind = Column(db.Text(), nullable=False, index=True)
    tag = Column(db.Text(), nullable=False, index=True)

    def __init__(self, **kwargs):
        db.Model.__init__(self, **kwargs)

    def __repr__(self):
        return '<Tag({id={id}, kind={kind}, tag={tag})>'.format(tag=self.tag, id=self.id, kind=self.kind)


case_tag_map = db.Table('case_tag_map',
                        db.Column('tag_id', db.Integer, db.ForeignKey('tags.id'), index=True),
                        db.Column('case_id', db.Integer, db.ForeignKey('cases.id'), index=True))

case_staff_map = db.Table('case_staff_map',
                          db.Column('user_id', db.Integer, db.ForeignKey('users.id'), index=True),
                          db.Column('case_id', db.Integer, db.ForeignKey('cases.id'), index=True),
                          db.Column('primary', db.Boolean, default=False),
                          db.Column('secondary', db.Boolean, default=False))


class Case(SurrogatePK, Model):
    __tablename__ = 'cases'
    crd_number = Column(db.Integer(), unique=False, nullable=False, index=True)
    case_name = Column(db.Text(), unique=False, nullable=True, index=True)
    case_desc = Column(db.Text(), unique=False, nullable=True)
    start_date = Column(db.Date(), unique=False, nullable=False, index=True)
    end_date = Column(db.Date(), unique=False, nullable=True, index=True)

    case_type_id = ReferenceCol('case_types', nullable=False)
    case_type = relationship('CaseType', backref='case_types')

    region_id = ReferenceCol('regions', nullable=False)
    region = relationship('Region', backref='regions')

    staff = db.relationship('User', secondary=case_staff_map,
                            backref=db.backref('cases', lazy='dynamic'))

    mars_risk_score = Column(db.Integer, unique=False, nullable=True)
    qau_risk_score = Column(db.Integer, unique=False, nullable=True)
    examiner_risk_score = Column(db.Integer, unique=False, nullable=True)
    tags = db.relationship('Tag', secondary=case_tag_map,
                           backref=db.backref('cases', lazy='dynamic'))

    def __init__(self, *args, **kwargs):
        db.Model.__init__(self, *args, **kwargs)

    def __repr__(self):
        return '<Case(id={id}, case_name={case_name}, )>'.format(id=self.id, case_name=self.case_name)

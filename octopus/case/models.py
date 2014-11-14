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
        return '<Region({code})>'.format(name=self.code)

class Case(SurrogatePK, Model):

    __tablename__ = 'cases'
    crd_number = Column(db.Integer(), unique=False, nullable=False)
    start_date = Column(db.Date(), unique=False, nullable=False)
    end_date = Column(db.Date(), unique=False, nullable=True)

    case_type_id = ReferenceCol('case_type', nullable=False)
    case_type = relationship('CaseType', backref='case_type')

    region_id = ReferenceCol('region', nullable=False)
    region = relationship('Region', backref='region')

    primary_id = ReferenceCol('user', nullable=False)
    primary = relationship('User', backref='users')

    secondary_id = ReferenceCol('user', nullable=False)
    secondary = relationship('User', backref='users')

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

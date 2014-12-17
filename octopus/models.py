# -*- coding: utf-8 -*-

import datetime as dt

from flask.ext.login import UserMixin

from octopus.extensions import bcrypt
# from octopus.task.models import task_user_map

from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import backref

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
        return '<CaseType (code={code}, description={desc})>'.format(
            code=self.code, desc=self.description)


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
        return '<Tag(id={id}, kind={kind}, tag={tag})>'.format(
            tag=self.tag, id=self.id, kind=self.kind)


case_tag_map = db.Table('case_tag_map',
                        db.Column('tag_id', db.Integer,
                                  db.ForeignKey('tags.id'), index=True),
                        db.Column('case_id', db.Integer,
                                  db.ForeignKey('cases.id'), index=True))


class CaseStaffMap(SurrogatePK, Model):
    __tablename__ = 'case_staff_map'
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), index=True)
    case_id = db.Column(db.Integer, db.ForeignKey('cases.id'), index=True)
    primary = db.Column(db.Boolean, default=False)
    secondary = db.Column(db.Boolean, default=False)

    case = db.relationship('Case',
                           backref=backref("user_cases",
                                           cascade="all, delete-orphan"))
    user = db.relationship('User')

    def __init__(self, user=None, case=None, primary=False,
                 secondary=False, **kwargs):
        db.Model.__init__(self, **kwargs)
        self.user = user
        self.case = case
        self.primary = primary
        self.secondary = secondary

    def __repr__(self):
        return '<CaseStaffMap(id={id}, user_id={user_id}, ' \
               'case_id={case_id}, ' \
               'primary={primary}, sec={secondary})>' \
            .format(id=self.id, user_id=self.user_id, case_id=self.case_id,
                    primary=self.primary, secondary=self.secondary)


class CaseFile(SurrogatePK, Model):
    __tablename__ = 'case_files'
    kind = db.Column(db.Text(), unique=False)
    name = db.Column(db.Text(), unique=False)
    path = db.Column(db.Text(), unique=False)
    attributes = db.Column(db.Text(), unique=False, nullable=True)
    case_id = ReferenceCol('cases', nullable=False)

    def __init__(self, *args, **kwargs):
        db.Model.__init__(self, *args, **kwargs)

    def __repr__(self):
        return '<CaseFile(id={id}, kind={kind}, name={name})>'.format(
            id=self.id, kind=self.kind, name=self.name)


class Case(SurrogatePK, Model):
    __tablename__ = 'cases'
    crd_number = Column(db.Text(), unique=False, nullable=False, index=True)
    case_name = Column(db.Text(), unique=False, nullable=True, index=True)
    case_desc = Column(db.Text(), unique=False, nullable=True)
    start_date = Column(db.Date(), unique=False, nullable=False, index=True)
    end_date = Column(db.Date(), unique=False, nullable=True, index=True)

    case_type_id = ReferenceCol('case_types', nullable=False)
    case_type = relationship('CaseType', backref='case_types')

    region_id = ReferenceCol('regions', nullable=False)
    region = relationship('Region', backref='regions')

    users = association_proxy('user_cases', 'user')

    mars_risk_score = Column(db.Integer, unique=False, nullable=True)
    qau_risk_score = Column(db.Integer, unique=False, nullable=True)
    examiner_risk_score = Column(db.Integer, unique=False, nullable=True)
    tags = relationship('Tag', secondary=case_tag_map,
                        backref=db.backref('cases', lazy='dynamic'))

    files = relationship('CaseFile', backref='case_files')

    tasks = relationship('Task', backref='case_tasks')

    def __init__(self, *args, **kwargs):
        db.Model.__init__(self, *args, **kwargs)

    def get_tags(self, kind=None):
        """
        Get a case's tags, class must be initialized first
        :param kind: risk | non_qau_staff | None
        :return: list of unicode tags according to the specified kind
        """
        if kind:
            return [i.tag for i in self.tags if i.kind == kind]
        else:
            return [i.tag for i in self.tags]

    def __repr__(self):
        return '<Case(id={id}, case_name={case_name}, )>'.format(
            id=self.id, case_name=self.case_name)


# _________ task section ______________ 


task_user_map = db.Table('task_user_map',
                         db.Column('user_id', db.Integer,
                                   db.ForeignKey('users.id'),
                                   index=True),
                         db.Column('task_id', db.Integer,
                                   db.ForeignKey('tasks.id'),
                                   index=True))


class Task(SurrogatePK, Model):
    __tablename__ = 'tasks'
    task_name = Column(db.Text(), unique=False, nullable=True, index=True)
    task_desc = Column(db.Text(), unique=False, nullable=True)
    start_date = Column(db.Date(), unique=False, nullable=False, index=True)
    end_date = Column(db.Date(), unique=False, nullable=True, index=True)

    # one-to-many user to tasks
    creator_id = db.Column('creator_id', db.Integer, db.ForeignKey('users.id'))

    # ref to optional associated case
    case_id = ReferenceCol('cases', nullable=False)
    # parent_case = db.Column('parent_case', db.Integer,
    #                         db.ForeignKey('cases.id'))

    # many-to-many users to tasks
    assignees = relationship('User', secondary=task_user_map,
                             backref=db.backref('user_tasks', lazy='dynamic'))

    def __init__(self, *args, **kwargs):
        db.Model.__init__(self, *args, **kwargs)

    def __repr__(self):
        return '<Task(id={id}, task_name={task_name}, )>'.format(
            id=self.id, task_name=self.task_name)

# ___________ user section __________


class Role(SurrogatePK, Model):
    __tablename__ = 'roles'
    name = Column(db.String(80), unique=True, nullable=False)
    user_id = ReferenceCol('users', nullable=True)
    user = relationship('User', backref='roles')

    def __init__(self, name, **kwargs):
        db.Model.__init__(self, name=name, **kwargs)

    def __repr__(self):
        return '<Role({name})>'.format(name=self.name)


class User(UserMixin, SurrogatePK, Model):
    __tablename__ = 'users'
    username = Column(db.String(80), unique=True, nullable=False, index=True)
    email = Column(db.String(80), unique=True, nullable=False)
    password = Column(db.String(128), nullable=True)
    created_at = Column(db.DateTime, nullable=False, default=dt.datetime.utcnow)
    first_name = Column(db.String(30), nullable=True)
    last_name = Column(db.String(30), nullable=True)
    active = Column(db.Boolean(), default=False)
    is_admin = Column(db.Boolean(), default=False)
    contract = Column(db.String(20), default='None', nullable=True)

    # ref to staff table
    user_cases = db.relationship('CaseStaffMap',
                                 cascade="all, delete-orphan",
                                 backref='users')
    cases = association_proxy('user_cases', 'cases')

    created_tasks = relationship('Task',
                                 backref='creator',
                                 lazy='dynamic')

    tasks = relationship('Task', secondary="task_user_map",
                         backref=db.backref('users', lazy='dynamic'))

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
    def is_permanent(self):
        return True if self.contract == 'permanent' else False

    @property
    def is_contractor(self):
        return True if self.contract == 'contractor' else False

    @property
    def is_manager(self):
        return True if self.contract == 'manager' else False

    @property
    def full_name(self):
        if self.first_name and self.last_name:
            return "{0} {1}".format(self.first_name, self.last_name)
        else:
            return self.username

    def __repr__(self):
        return '<User({username!r})>'.format(username=self.username)
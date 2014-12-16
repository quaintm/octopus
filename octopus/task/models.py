# -*- coding: utf-8 -*-
import datetime as dt

from flask.ext.login import UserMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import backref

from octopus.extensions import bcrypt
from octopus.user.models import User
from octopus.case.models import Case
from octopus.database import (
    Column,
    db,
    Model,
    ReferenceCol,
    relationship,
    SurrogatePK
)


task_user_map = db.Table('task_user_map',
                               db.Column('user_id',db.Integer, db.ForeignKey('users.id'), index=True),
                               db.Column('task_id',db.Integer, db.ForeignKey('tasks.id'), index=True)
                               )


class Task(SurrogatePK, Model):
    __tablename__ = 'tasks'
    task_name = Column(db.Text(), unique=False, nullable=True, index=True)
    task_desc = Column(db.Text(), unique=False, nullable=True)
    start_date = Column(db.Date(), unique=False, nullable=False, index=True)
    end_date = Column(db.Date(), unique=False, nullable=True, index=True)

    task_creator = db.Column('task_creator',db.Integer, db.ForeignKey('user.id'))
    parent_case = db.Column('parent_case',db.Integer, db.ForeignKey('case.id'))

    assignees = relationship('User', secondary=task_user_map,
                     backref=db.backref('tasks', lazy='dynamic'))

    def __init__(self, *args, **kwargs):
        db.Model.__init__(self, *args, **kwargs)

    def __repr__(self):
        return '<Task(id={id}, task_name={task_name}, )>'.format(id=self.id, task_name=self.task_name)


# -*- coding: utf-8 -*-
"""Database module, including the SQLAlchemy database object and DB-related
utilities.
"""
from flask.ext.login import current_user
from sqlalchemy.orm import relationship

from .extensions import db
from .compat import basestring
from flask import current_app

# Alias common SQLAlchemy names
Column = db.Column
relationship = relationship


class CRUDMixin(object):
    """Mixin that adds convenience methods for CRUD (create, read, update, delete)
    operations.
    """

    @classmethod
    def create(cls, **kwargs):
        """Create a new record and save it the database."""
        instance = cls(**kwargs)
        return instance.save()

    def update(self, commit=True, **kwargs):
        """Update specific fields of a record."""
        for attr, value in kwargs.iteritems():
            setattr(self, attr, value)
        return commit and self.save() or self

    def save(self, commit=True):
        """Save the record."""
        self._log_updates()
        db.session.add(self)
        if commit:
            db.session.commit()
        return self

    def delete(self, commit=True):
        """Remove the record from the database."""
        self._log_updates(method='delete')
        db.session.delete(self)
        return commit and db.session.commit()

    def _log_updates(self, method='save'):
        try:
            user = current_user.username
            vals = {c.name: str(getattr(self, c.name)) for c in
                    self.__table__.columns}
            current_app.logger.info(
                [('user', user), ('table', self.__class__.__name__),
                 ('method', method), vals])
        except Exception as e:
            current_app.logger.error(
                'DB Change Logging Issue Encountered: {}'.format(str(e)))


class Model(CRUDMixin, db.Model):
    """Base model class that includes CRUD convenience methods."""
    __abstract__ = True


# From Mike Bayer's "Building the app" talk
# https://speakerdeck.com/zzzeek/building-the-app
class SurrogatePK(object):
    """A mixin that adds a surrogate integer 'primary key' column named
    ``id`` to any declarative-mapped class.
    """
    __table_args__ = {'extend_existing': True, 'sqlite_autoincrement': True}

    id = db.Column(db.Integer, primary_key=True)

    @classmethod
    def get_by_id(cls, id):
        if any(
                (isinstance(id, basestring) and id.isdigit(),
                 isinstance(id, (int, float))),
        ):
            return cls.query.get(int(id))
        return None


def ReferenceCol(tablename, nullable=False, pk_name='id', **kwargs):
    """Column that adds primary key foreign key reference.

    Usage: ::

        category_id = ReferenceCol('category')
        category = relationship('Category', backref='categories')
    """
    return db.Column(
        db.ForeignKey("{0}.{1}".format(tablename, pk_name)),
        nullable=nullable, **kwargs)

#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os

from flask.ext.script import Manager, Shell, Server
from flask.ext.migrate import MigrateCommand

from octopus.app import create_app
from octopus.models import Case, CaseType, Region, Tag, CaseStaffMap, case_tag_map, User, Role
from octopus.settings import DevConfig, ProdConfig
from octopus.database import db


if os.environ.get("OCTOPUS_ENV") == 'prod':
  app = create_app(ProdConfig)
else:
  app = create_app(DevConfig)

manager = Manager(app)
TEST_CMD = "py.test tests"

def _make_context():
  """Return context dict for a shell session so you can access
  app, db, and the User model by default.
  """
  return {'app': app, 'db': db, 'User': User, 'Role': Role,
      'Case': Case, 'CaseType': CaseType, 'Region': Region, 'Tag': Tag,
      'CaseStaffMap': CaseStaffMap, 'case_tag_map': case_tag_map}

@manager.command
def test():
  """Run the tests."""
  import pytest
  exit_code = pytest.main(['tests', '--verbose'])
  return exit_code

manager.add_command('server', Server())
manager.add_command('shell', Shell(make_context=_make_context))
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
  manager.run()

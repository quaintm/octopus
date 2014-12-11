===============================
octopus
===============================

"the panopticon of the SEC"


Replicate Environment
---------------------

::

    conda create -n octopus -f conda_requirements.txt
    activate octopus
    pip install -r requirements.txt




Quickstart
----------

First, set your app's secret key as an environment variable. For example, example add the following to ``.bashrc`` or ``.bash_profile``.

.. code-block:: bash

    export OCTOPUS_SECRET = 'something-really-secret'


Then run the following commands to bootstrap your environment.


::

    git clone https://github.com/martinow/octopus
    cd octopus
    pip install -r requirements/dev.txt
    python manage.py db init
    python manage.py db migrate
    python manage.py db upgrade
    python manage.py server

Be careful of the annoying 'sqlite_sequence' table bug. In every migration script, it will need to be deleted (its a reserved table that isn't handled correctly yet).

Deployment
----------

In your production environment, make sure the ``OCTOPUS_ENV`` environment variable is set to ``"prod"``.

Twisted is the production server of choice, so `conda install gevent` is needed before releasing to production.

To light up the production server, run `python run_prod.py`. The server will light up on localhost:9001


Shell
-----

To open the interactive shell, run ::

    python manage.py shell

In this, you will have access to all current Case and User models


Running Tests
-------------

To run all tests, run ::

    python manage.py test


Migrations
----------

Whenever a database migration needs to be made. Run the following commmands:
::

    python manage.py db migrate

This will generate a new migration script. Then run:
::

    python manage.py db upgrade

To apply the migration.

For a full migration command reference, run ``python manage.py db --help``.

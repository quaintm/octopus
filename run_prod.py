from logging import INFO, getLogger, Formatter
from logging.handlers import TimedRotatingFileHandler
from gevent.wsgi import WSGIServer
import os

from octopus.app import create_app
from octopus.settings import ProdConfig


def main():
    # Init the app
    app = create_app(ProdConfig)

    if not os.path.exists(os.path.dirname(ProdConfig.PROD_LOG_PATH)):
        os.mkdir(os.path.dirname(ProdConfig.PROD_LOG_PATH))

    # Set up the loggers
    file_handler = TimedRotatingFileHandler(ProdConfig.PROD_LOG_PATH,
                                            when=ProdConfig.PROD_LOG_ROTATE_WHEN,
                                            backupCount=ProdConfig.PROD_LOG_BACKUP_COUNT,
                                            encoding=ProdConfig.PROD_LOG_ENCODING)
    file_handler.setLevel(INFO)
    file_handler.setFormatter(Formatter('%(asctime)s %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'))
    loggers = [app.logger, getLogger('sqlalchemy'), getLogger('werkzeug'), getLogger('gevent'), getLogger('flask')]

    for logger in loggers:
        logger.addHandler(file_handler)
        logger.setLevel(INFO)

    # Light up the server
    print 'Gevent on port http://localhost:{port}...'.format(port=ProdConfig.PROD_PORT)
    http_server = WSGIServer(('localhost', ProdConfig.PROD_PORT), app)
    http_server.serve_forever()


if __name__ == "__main__":
    main()
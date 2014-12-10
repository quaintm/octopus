from gevent.wsgi import WSGIServer

from octopus.app import create_app
from octopus.settings import ProdConfig

app = create_app(ProdConfig)

def main():
    print 'Gevent on port {port}...'.format(port=ProdConfig.PROD_PORT)
    http_server = WSGIServer(('localhost', ProdConfig.PROD_PORT), app)
    http_server.serve_forever()

if __name__ == "__main__":
    main()
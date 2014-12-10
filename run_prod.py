import optparse

from twisted.internet import reactor
from twisted.web.server import Site
from twisted.web.wsgi import WSGIResource

from octopus.app import create_app
from octopus.settings import ProdConfig

app = create_app(ProdConfig)

def main():
    print 'Twisted on port {port}...'.format(port=ProdConfig.PROD_PORT)

    resource = WSGIResource(reactor, reactor.getThreadPool(), app)
    site = Site(resource)

    reactor.listenTCP(ProdConfig.PROD_PORT, site, interface="localhost")
    reactor.run()


if __name__ == "__main__":
    main()
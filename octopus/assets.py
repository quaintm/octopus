# -*- coding: utf-8 -*-
from flask.ext.assets import Bundle, Environment

css = Bundle(
    "libs/bootstrap/dist/css/bootstrap.css",
    "libs/dataTables/dataTables.bootstrap.css",
    "libs/dataTables/dataTables.tableTools.css",
    "libs/font-awesome4/css/font-awesome.css",
    "libs/bootstrap-datepicker/css/datepicker3.css",
    "css/style.css",
    filters="cssmin",
    output="public/css/common.css"
)

js = Bundle(
    "libs/jQuery/dist/jquery.js",
    "libs/bootstrap/dist/js/bootstrap.js",
    "js/plugins.js",
    "libs/dataTables/jquery.dataTables.js",
    "libs/dataTables/dataTables.bootstrap.js",
    "libs/dataTables/dataTables.tableTools.js",
    "libs/bootstrap-datepicker/js/bootstrap-datepicker.js",
    filters='jsmin',
    output="public/js/common.js"
)

assets = Environment()

assets.register("js_all", js)
assets.register("css_all", css)

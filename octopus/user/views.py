# -*- coding: utf-8 -*-
from flask import Blueprint, render_template
from flask.ext.login import login_required
from octopus.extensions import nav

blueprint = Blueprint("user", __name__, url_prefix='/users',
                        static_folder="../static")

nav.Bar('user', [
    nav.Item('User', '', items=[
        nav.Item('Members', 'user.members'),
        nav.Item('second drop', '', items=[
            nav.Item('Members2', 'user.members')
        ])
    ])
])

@blueprint.route("/")
@login_required
def members():
    return render_template("users/members.html")

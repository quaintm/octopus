# -*- coding: utf-8 -*-
from flask import Blueprint, render_template
from flask.ext.login import login_required
from .models import Region, CaseType, Case

blueprint = Blueprint("case", __name__, url_prefix='/case',
                        static_folder="../static")


@blueprint.route("/")
@login_required
def members():
    return render_template("users/members.html")

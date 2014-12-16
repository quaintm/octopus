# -*- coding: utf-8 -*-
'''Public section, including homepage and signup.'''
from flask import (Blueprint, request, render_template, flash, url_for,
                   redirect)
from flask.ext.login import login_user, login_required, logout_user

from octopus.extensions import login_manager, nav
from octopus.models import User
from octopus.public.forms import LoginForm
from octopus.user.forms import RegisterForm
from octopus.utils import flash_errors, admin_required


blueprint = Blueprint('public', __name__, static_folder="../static")

nav.Bar('public', [
    nav.Item('<i class="fa fa-home fa-lg"></i>', 'public.home',
        html_attrs=str("data-placement='bottom',\
            title='Home', \
            data-toggle='tooltip'"
        ),
    )
])


@login_manager.user_loader
def load_user(id):
    return User.get_by_id(int(id))


@blueprint.route("/", methods=["GET", "POST"])
def home():
    form = LoginForm(request.form)
    # Handle logging in
    if request.method == 'POST':
        if form.validate_on_submit():
            login_user(form.user)
            flash("You are logged in.", 'success')
            # redirect_url = request.args.get("next") or url_for("public/home.html")
            return render_template("public/home.html", form=form)
        else:
            flash_errors(form)
    return render_template("public/home.html", form=form)


@blueprint.route('/logout/')
@login_required
def logout():
    logout_user()
    flash('You are logged out.', 'info')
    return redirect(url_for('public.home'))


@blueprint.route("/register/", methods=['GET', 'POST'])
@admin_required
def register():
    form = RegisterForm(request.form, csrf_enabled=False)
    if form.validate_on_submit():
        new_user = User.create(username=form.username.data,
                               email=form.email.data,
                               password=form.password.data,
                               active=True)
        new_user.save()
        flash('New user created.')
        return redirect(url_for('public.home'))
    else:
        flash_errors(form)
    return render_template('public/register.html', form=form)
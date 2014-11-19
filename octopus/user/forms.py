from flask_wtf import Form
from wtforms import PasswordField, StringField
from wtforms.validators import DataRequired, Email, EqualTo, Length, Optional
from flask.ext.login import current_user, login_user

from .models import User
from octopus.utils import RequiredIf


class RegisterForm(Form):
    username = StringField('Username',
                    validators=[DataRequired(), Length(min=3, max=25)])
    email = StringField('Email',
                    validators=[DataRequired(), Email(), Length(min=6, max=40)])
    password = PasswordField('Password',
                                validators=[DataRequired(), Length(min=6, max=40)])
    confirm = PasswordField('Verify password',
                [DataRequired(), EqualTo('password', message='Passwords must match')])

    def __init__(self, *args, **kwargs):
        super(RegisterForm, self).__init__(*args, **kwargs)
        self.user = None

    def validate(self):
        initial_validation = super(RegisterForm, self).validate()
        if not initial_validation:
            return False
        user = User.query.filter_by(username=self.username.data).first()
        if user:
            self.username.errors.append("Username already registered")
            return False
        user = User.query.filter_by(email=self.email.data).first()
        if user:
            self.email.errors.append("Email already registered")
            return False
        return True

class EditUserProfile(Form):
    username = StringField('Username',
                           validators=[Optional(), Length(min=3, max=25)])
    email = StringField('Email',
                        validators=[Optional(), Email(), Length(min=6, max=40)])
    old_password_confirm = PasswordField('Old Password',
                             validators=[RequiredIf('new_password'), Length(min=6, max=40)])
    new_password = PasswordField('New Password',
                             validators=[Length(min=6, max=40)])
    new_confirm = PasswordField('Verify New Password',
                            [RequiredIf('new_password'), EqualTo('new_password', message='Passwords must match')])
    first_name = StringField('First Name',
                             validators=[Optional()])
    last_name = StringField('Last Name', validators=[Optional()])

    def __init__(self, user, *args, **kwargs):
        super(EditUserProfile, self).__init__(*args, **kwargs)
        self.user = user
        self.updated_attrs = dict()

    def validate(self):
        initial_validation = super(EditUserProfile, self).validate()
        if not initial_validation:
            return False
        valid = True

        # Reset Password Logic
        if self.old_password_confirm.data:
            if self.new_password.data:
                if self.new_confirm.data:
                    if not current_user.check_password(self.old_password_confirm.data):
                        self.old_password_confirm.errors.append('Old password was incorrect')
                        valid = False
                    else:
                        if not self.new_password.data == self.new_confirm.data:
                            self.new_confirm.errors('Verify New Password field does not match New Password Field')
                            valid = False
                else:
                    self.new_confirm.errors.append('Confirm Password Field was blank')
                    valid = False

        if self.username.data:
            new_username = User.query.filter_by(username=self.username.data).first()
            if new_username and not (current_user.username == self.username.data):
                # Usernames should be unique
                self.username.errors.append('This username is already taken')
                valid = False

        return valid

def save_profile_edits(form):
    if form.new_password.data:
        current_user.set_password(form.new_password.data)
    current_user.first_name = form.first_name.data
    current_user.last_name = form.last_name.data

    if not current_user.username == form.username.data:
        #need to relogin the user as their username has changed
        relogin = True
    else:
        relogin = False
    current_user.username = form.last_name.data
    current_user.email = form.last_name.data
    current_user.save()




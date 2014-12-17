from flask import request
from flask_wtf import Form
from wtforms import PasswordField, StringField
from wtforms.validators import DataRequired, Email, EqualTo, Length, Optional

from octopus.models import User


class RegisterForm(Form):
    username = StringField('Username',
                           validators=[DataRequired(), Length(min=3, max=25)])
    email = StringField('Email',
                        validators=[DataRequired(), Email(),
                                    Length(min=6, max=40)])
    password = PasswordField('Password',
                             validators=[DataRequired(), Length(min=6, max=40)])
    confirm = PasswordField('Verify password',
                            [DataRequired(), EqualTo('password',
                                                     message='Passwords must match')])

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
    first_name = StringField('First Name',
                             validators=[Optional()])
    last_name = StringField('Last Name',
                            validators=[Optional()])

    old_password_confirm = PasswordField('Old Password',
                                         validators=[Optional(),
                                                     Length(min=6, max=40)])
    new_password = PasswordField('New Password',
                                 validators=[Optional(), Length(min=6, max=40)])
    new_confirm = PasswordField('Verify New Password',
                                [Optional(), EqualTo('new_password',
                                                     message='Passwords must match')])

    def __init__(self, user_id, *args, **kwargs):
        super(EditUserProfile, self).__init__(*args, **kwargs)
        self.user = User.get_by_id(user_id)
        self.username.placeholder = "Username"
        self.email.placeholder = "Email Address"
        self.first_name.placeholder = "First Name"
        self.last_name.placeholder = "Last Name"

        if not request.method == 'POST':
            self.username.data = self.user.username
            self.email.data = self.user.email
            self.first_name.data = self.user.first_name
            self.last_name.data = self.user.last_name

    def validate(self):
        initial_validation = super(EditUserProfile, self).validate()
        if not initial_validation:
            return False
        valid = True

        # Reset Password Logic
        if self.old_password_confirm.data:
            if self.new_password.data:
                if self.new_confirm.data:
                    if not self.user.check_password(
                            self.old_password_confirm.data):
                        self.old_password_confirm.errors.append(
                            'Old password was incorrect')
                        valid = False
                    else:
                        if not self.new_password.data == self.new_confirm.data:
                            self.new_confirm.errors(
                                'Verify New Password field does not match New Password Field')
                            valid = False
                else:
                    self.new_confirm.errors.append(
                        'Confirm Password Field was blank')
                    valid = False

        if self.username.data:
            new_username = User.query.filter_by(
                username=self.username.data).first()
            if new_username and not (self.user.username == self.username.data):
                print self.user.username
                print self.username.data
                # Usernames should be unique
                self.username.errors.append('This username is already taken')
                valid = False
        if not self.user.first_name and not self.first_name.data:
            self.first_name.errors.append('First Name is required')
            valid = False
        if not self.user.last_name and not self.last_name.data:
            self.last_name.errors.append('Last Name is required')
            valid = False

        return valid

    def commit_updates(self):
        if self.new_password.data:
            self.user.set_password(self.new_password.data)
        if self.first_name.data:
            self.user.first_name = self.first_name.data
        if self.last_name.data:
            self.user.last_name = self.last_name.data
        if self.username.data:
            self.user.username = self.username.data
        if self.email.data:
            self.user.email = self.email.data
        self.user.save()




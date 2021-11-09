from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Distillery


def distillery_exists(form, field):
    # Checking if user exists
    email = field.data
    user = Distillery.query.filter(Distillery.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    distillery = Distillery.query.filter(Distillery.email == email).first()
    if not distillery:
        raise ValidationError('No such Distillery exists.')
    if not distillery.check_password(password):
        raise ValidationError('Password was incorrect.')


class DistilleryLoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), distillery_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])

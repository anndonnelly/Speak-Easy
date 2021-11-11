from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import Distillery


def distillery_exists(form, field):
    # Checking if user exists
    email = field.data
    user = Distillery.query.filter(Distillery.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def distillery_exists(form, field):
    # Checking if username is already in use
    name = field.data
    user = Distillery.query.filter(Distillery.name == name).first()
    if user:
        raise ValidationError('Name is already in use.')


class DistillerySignUpForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired(), distillery_exists])
    street = StringField('street', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    logo = StringField('logo', validators=[DataRequired()])


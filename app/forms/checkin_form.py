from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField, FileField
from wtforms.validators import DataRequired, NumberRange
from app.models import User


class CheckinForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[
                          DataRequired(), NumberRange(min=1, max=5)])
    drink_id = IntegerField('drink_id',)
    distillery_id = IntegerField('distillery_id',)
    location = StringField('location')
    drink_name = StringField('drink_name')



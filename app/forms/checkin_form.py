from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField, FileField
from wtforms.validators import DataRequired, NumberRange
from app.models import User


class CheckinForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[
                          DataRequired(), NumberRange(min=1, max=5)])
    image = FileField('image')
    drink_id = IntegerField('drink_id', validators=[DataRequired()])
    distillery_id = IntegerField('distillery_id', validators=[DataRequired()])
    location = StringField('location')

    # API will grab location

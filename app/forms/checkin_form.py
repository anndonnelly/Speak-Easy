from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, NumberRange
from app.models import User


class CheckinForm(FlaskForm):
    review = TextAreaField('review', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[
                          DataRequired(), NumberRange(min=1, max=5)])
    # API will grab location

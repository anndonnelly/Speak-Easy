from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.fields.html5 import URLField
from wtforms.validators import DataRequired, URL


class DrinkForm(FlaskForm):
    name = TextAreaField('name', validators=[DataRequired()])
    description = TextAreaField('rating', validators=[DataRequired()])
    image = URLField('image', validators=[URL(
        message='You must provide a valid URL for your image.')])
    abv = IntegerField('abv')
    distillery_id = IntegerField('distillery_id')

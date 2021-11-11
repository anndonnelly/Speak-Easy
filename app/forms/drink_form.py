from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField
from wtforms.validators import DataRequired, NumberRange

class DrinkForm(FlaskForm):
    name = TextAreaField('name', validators=[DataRequired()])
    description = TextAreaField('rating', validators=[DataRequired()])
    image = TextAreaField('image')
    abv = IntegerField('abv', validators=[DataRequired()])
    rating = IntegerField('rating')
    distillery_id = IntegerField('distillery_id', validators=[DataRequired()])
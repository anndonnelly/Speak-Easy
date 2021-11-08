from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField,SelectField
from wtforms.validators import DataRequired, NumberRange

class DrinkForm(FlaskForm):
    name = TextAreaField('name', validators=[DataRequired()])
    description = TextAreaField('rating', validators=[DataRequired()])
    image = TextAreaField('image', validators=[DataRequired()])
    abv = IntegerField('abv', validators=[DataRequired()])

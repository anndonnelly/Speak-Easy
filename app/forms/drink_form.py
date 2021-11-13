from flask_wtf import FlaskForm
from wtforms import TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, NumberRange

class DrinkForm(FlaskForm):
    name = TextAreaField('name', validators=[DataRequired()])
    description = TextAreaField('rating', validators=[DataRequired()])
    image = StringField('image')
    abv = IntegerField('abv')
    distillery_id = IntegerField('distillery_id')

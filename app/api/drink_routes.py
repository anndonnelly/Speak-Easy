from flask import Blueprint, request, redirect
from app.forms.drink_form import DrinkForm
from app.models.drink import Drink, db

drink_routes = Blueprint("drinks", __name__, url_prefix="/drinks")


@drink_routes.route("", methods=["GET, POST"])
def load_drinks():
  form = DrinkForm
  if form.validate_on_submit():
    data = form.data
    new_drink = Drink(
      name = data["name"],
      description = data["description"],
      image = data["description"],
      abv = data["abv"]
    )
    db.session.add(new_drink)
    db.session.commit()
    return new_drink.to_dict()
  return {drink.id: drink.to_dict() for drink in Drink.query.all()}



@drink_routes.route("/<int:id>")
def one_drink(id):
  drink = Drink.query.get(id)
  print(drink)
  return drink.to_dict()

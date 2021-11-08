from flask import Blueprint, request, redirect
from app.models.drink import Drink, db

drink_routes = Blueprint("drinks", __name__, url_prefix="/drinks")


@drink_routes.route("", methods=["GET, POST"])
def load_drinks():
  if method == "POST":
    pass
  return {drink.id: drink.to_dict() for drink in Drink.query.all()}


@drink_routes.route("/<int:id>")
def one_drink(id):
  drink = Drink.query.get(id)
  print(drink)
  return drink.to_dict()

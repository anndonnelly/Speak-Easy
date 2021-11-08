from flask import Blueprint, request, redirect
from app.models.drink import Drink, db

drink_routes = Blueprint("drinks", __name__, url_prefix="/drinks")


@drink_routes.route("")
def loadDrinks():
  return {drink.id: drink.to_dict() for drink in Drink.query.all()}

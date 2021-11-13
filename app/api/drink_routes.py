import boto3
import botocore
from flask import Blueprint, request, redirect
from flask_login import login_required
from app.forms.drink_form import DrinkForm
from app.models.drink import Drink, db

from app.config import Config
from app.aws_s3 import *

drink_routes = Blueprint("drinks", __name__, url_prefix="/drinks")


@drink_routes.route("", methods=["GET", "POST"])
# @login_required
def load_drinks():
    form = DrinkForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_drink = Drink(
            name=data["name"],
            description=data["description"],
            image=data["image"],
            abv=data["abv"],
            distillery_id=data["distillery_id"],
        )
        db.session.add(new_drink)
        db.session.commit()
        return new_drink.to_dict()
    return {drink.id: drink.to_dict() for drink in Drink.query.all()}


@drink_routes.route("/<int:id>", methods=["GET", "PATCH"])
def one_drink(id):
    drink = Drink.query.get(id)
    form = DrinkForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        drink.name = form.data['name']
        drink.description = form.data['description']
        drink.image = form.data['image']
        drink.distillery_id = drink.distillery_id
        drink.abv = form.data['abv']
        db.session.commit()
        return drink.to_dict()
    return drink.to_dict()


@drink_routes.route("/<int:id>", methods=["DELETE"])
def delete_drink(id):
    drink = Drink.query.get(id)
    Drink.query.filter(Drink.id == id).delete()
    db.session.commit()
    return "True", 201

# AWS
# @drink_routes.route('/<int:id>', methods=["POST"])
# # @login_required
# def upload_file():
#     if "file" not in request.files:
#         return "No user_file key in request.files"

#     file = request.files["file"]

#     if file:
#          file_url = upload_file_to_s3(file, Config.S3_BUCKET)
#          # create an instance of <Your_Model>
#          file = File(
#              user_id=request.form.get('user_id')
#              # extract any form fields you've appended to the
#              # body of your POST request
#              # i.e.
#              url=file_url
#          )
#          db.session.add(file)
#          db.session.commit()
#          return file.to_dict()
#     else: return "No File Attached!"

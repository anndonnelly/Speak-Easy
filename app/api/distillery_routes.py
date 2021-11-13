import boto3
import botocore
from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Distillery
from app.forms import EditDistilleryForm, DistillerySignUpForm

from app.config import Config
from app.aws_s3 import *


distillery_routes = Blueprint(
    'distilleries', __name__, url_prefix='/distilleries')


@distillery_routes.route('', methods=['GET', 'POST'])
# @login_required
def distilleries_cards():
    form = DistillerySignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        distillery = Distillery(
            name=form.data['name'],
            street=form.data['street'],
            city=form.data['city'],
            state=form.data['state'],
            owner_id=current_user.id,  # Gets current user from flask login and sets owner_id
            logo=form.data['logo']
        )
        db.session.add(distillery)
        db.session.commit()
        return distillery.to_dict()
    return {distillery.id: distillery.to_card_dict() for distillery
            in Distillery.query.all()}


@distillery_routes.route('/<int:id>')
# @login_required
def distillery(id):
    distillery = Distillery.query.get(id)
    return distillery.to_dict()


@distillery_routes.route('/<int:id>', methods=["PUT"])
# @login_required
def edit_distillery(id):
    form = EditDistilleryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        distillery = Distillery.query.get(id)
        distillery.name = form.data['name']
        distillery.street = form.data['street']
        distillery.city = form.data['city']
        distillery.state = form.data['state']
        distillery.logo = form.data['logo']
        db.session.commit()
        return distillery.to_dict()
    else:
        return form.errors


@distillery_routes.route('/<int:id>', methods=["DELETE"])
def delete_distillery(id):
    distillery = Distillery.query.get(id)
    Distillery.query.filter(Distillery.id == id).delete()
    db.session.commit()
    return "True", 201

# AWS
# @user_routes.route('/<int:id>', methods=["POST"])
# @login_required
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

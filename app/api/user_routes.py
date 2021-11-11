import boto3
import botocore
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User

from app.config import Config
from app.aws_s3 import *


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    return {user.id: user.to_dict() for user in User.query.all()}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>', methods=["DELETE"])
def delete_user(id):
    user = User.query.get(id)
    User.query.filter(User.id == id).delete()
    db.session.commit()
    return "True", 201


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

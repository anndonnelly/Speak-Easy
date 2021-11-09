import boto3
import botocore
from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.forms.checkin_form import CheckinForm
from app.models.checkin import Checkin, db
from app.config import Config
from app.aws_s3 import *

checkin_routes = Blueprint("checkins", __name__, url_prefix="/checkins")

@checkin_routes.route("")
# @login_required
def home():
    checkins = Checkin.query.all()
    return {
        "checkins": [checkin.to_dict() for checkin in checkins]
    }

@checkin_routes.route("/<int:id>")
# @login_required
def one_checkin(id):
    checkin = Checkin.query.get(id)
    return checkin.to_dict()


@checkin_routes.route("/new", methods=["POST"])
# @login_required
def checkin():
    form = CheckinForm()
    userid = current_user.get_id()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_checkin = Checkin(
            review=data["review"],
            rating=data["rating"],
            # location=data["location"],
            user_id= userid,)
            # drink_id=data["drink_id"],
            # distillery_id=["istillery_id"])
        db.session.add(new_checkin)
        db.session.commit()
        return new_checkin.to_dict()
    else:
        return form.errors

@checkin_routes.route("/<int:id>", methods=["PATCH"])
# @login_required
def checkin_edit(id):
    form = CheckinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_checkin= Checkin.query.get(id)
        edit_checkin.review = form.data["review"]
        edit_checkin.rating = form.data["rating"]
        db.session.commit()
        # return redirect("/")
        return edit_checkin.to_dict()
    else:
        return form.errors


@checkin_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def checkin_delete(id):
    # deleted_checkin = Checkin.query.get(id)
    Checkin.query.filter(Checkin.id == id).delete()
    db.session.commit()
    # return {"deleted_checkin": deleted_checkin.to_dict()}
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

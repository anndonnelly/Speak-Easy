from flask import Blueprint, request, redirect
from flask_login import login_required, current_user
from app.forms.checkin_form import CheckinForm
from app.models.checkin import Checkin, db


checkin_routes = Blueprint("checkins", __name__, url_prefix="/checkins")

@checkin_routes.route("")
# @login_required
def home():
    checkins = Checkin.query.all()
    return {
        "checkins": [checkin.to_dict() for checkin in checkins]
    }
    # ? too nested?

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
            user_id= userid,
            # drink_id=data["drink_id"],
            # distillery_id=["istillery_id"])
        )
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
        return redirect("/")
    else:
        return form.errors


@checkin_routes.route('/delete/<int:id>')
# @login_required
def checkin_delete(id):
    delete_checkin= Checkin.query.filter(Checkin.id == id).first()
    Checkin.query.filter(Checkin.id == id).delete()
    db.session.commit()
    return {
        'deleted_comment': delete_checkin.to_dict()
    }


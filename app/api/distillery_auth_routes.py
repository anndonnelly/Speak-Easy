from flask import Blueprint, jsonify, session, request
from app.models import Distillery, db
from app.forms import DistillerySignUpForm
from flask_login import current_user, login_user, logout_user, login_required

distillery_auth_routes = Blueprint(
    'distillery_auth', __name__, url_prefix="/distilleries")


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@distillery_auth_routes.route('/')
def authenticate():
    """
    Authenticates a Distillery.
    """
    if current_user.is_authenticated:
        return current_user.login_to_dict()
    return {'errors': ['Unauthorized']}


@distillery_auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a Distillery in
    """
    form = DistilleryLoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        distillery = Distillery.query.filter(
            Distillery.email == form.data['email']).first()
        login_user(distillery)
        return distillery.login_to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@distillery_auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@distillery_auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = DistillerySignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        distillery = Distillery(
            name=form.data['name'],
            email=form.data['email'],
            distillery_password=form.data['distillery_password'],
            street=form.data['street'],
            city=form.data['city'],
            state=form.data['state'],
            logo=form.data['logo']
        )
        db.session.add(distillery)
        db.session.commit()
        login_user(distillery)
        return distillery.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@distillery_auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401

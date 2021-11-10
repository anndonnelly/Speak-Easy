from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class Distillery(db.Model, UserMixin):
    __tablename__ = "distilleries"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=False, unique=True)
    hashed_password = db.Column(db.String, nullable=False)
    name = db.Column(db.String, nullable=False)
    street = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    latitude = db.Column(db.String)
    longitude = db.Column(db.String)
    logo = db.Column(db.Text)

    checkin = db.relationship(
        "Checkin", back_populates="distillery", cascade="all, delete")
    drink = db.relationship(
        "Drink", back_populates="distillery", cascade="all, delete")

    @property
    def distillery_password(self):
        return self.hashed_password

    @distillery_password.setter
    def distillery_password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.distillery_password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'logo': self.logo,
            'checkin_ids': [checkin.id for checkin in self.checkin],
            'drink_ids ': [drink.id for drink in self.drink]
        }
        # TODO add distillery page including drinks to dict


    def to_card_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'street': self.street,
            'logo': self.logo,
        }

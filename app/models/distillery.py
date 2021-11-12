from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# TODO: figure out how to store overall distillery rating


class Distillery(db.Model, UserMixin):
    __tablename__ = "distilleries"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    street = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
    latitude = db.Column(db.String)
    longitude = db.Column(db.String)
    logo = db.Column(db.Text)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        'users.id', ondelete='CASCADE'))

    owner = db.relationship('User', back_populates="distilleries", cascade="all")
    checkin = db.relationship(
        "Checkin", back_populates="distillery", cascade="all, delete")
    drink = db.relationship(
        "Drink", back_populates="distillery", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,

            'name': self.name,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'logo': self.logo,
            'owner_id': self.owner.id,
            'checkin_ids': [checkin.id for checkin in self.checkin],
            'drink_ids': [drink.id for drink in self.drink]
        }

    def to_card_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'street': self.street,
            'logo': self.logo,
            'owner_id': self.owner.id
        }

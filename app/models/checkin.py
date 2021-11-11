from .db import db
import datetime


class Checkin(db.Model):
    __tablename__ = "checkins"

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.Text)
    rating = db.Column(db.Integer)
    location = db.Column(db.String)
    image = db.Column(db.String)
    drink_name = db.Column(db.String)
    user_id = db.Column(db.Integer, db.ForeignKey(
        "users.id", ondelete="CASCADE"), nullable=False)
    drink_id = db.Column(db.Integer, db.ForeignKey(
        "drinks.id", ondelete="CASCADE"), nullable=True)
    distillery_id = db.Column(db.Integer, db.ForeignKey(
        "distilleries.id", ondelete="CASCADE"), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())
    updated_at = db.Column(db.DateTime, default=datetime.datetime.now())

    user = db.relationship("User", back_populates="checkins")
    distillery = db.relationship("Distillery", back_populates="checkin")
    drink = db.relationship("Drink", back_populates="checkin")

    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'rating': self.rating,
            'location': self.location,
            'drink_name': self.drink_name,
            'image': self.image,
            'user_id': self.user_id,
            'drink_id': self.drink_id,
            'distillery_id': self.distillery_id,
        }

# TODO drink, distillery should be nullable=False

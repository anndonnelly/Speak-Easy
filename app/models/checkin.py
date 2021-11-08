from .db import db

class Checkin(db.Model):
    __tablename__ = "checkins"

    id=db.Column(db.Integer, primary_key=True)
    review=db.Column(db.Text)
    rating=db.Column(db.Integer)
    location=db.Column(db.String, nullable=True)
    user_id=db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    drink_id=db.Column(db.Integer, db.ForeignKey("drinks.id"), nullable=True)
    distillery_id=db.Column(db.Integer, db.ForeignKey("distilleries.id"), nullable=True)
    user = db.relationship("User", back_populates="checkins")
    distillery = db.relationship("Distillery", back_populates="checkin")
    drink = db.relationship("Drink", back_populates="checkin")

    def to_dict(self):
        return {
            'id': self.id,
            'review': self.review,
            'rating': self.rating,
            'location': self.location,
            'user_id': self.user_id,
            'drink_id': self.drink_id,
        }

# TODO drink, distillery should be nullable=False
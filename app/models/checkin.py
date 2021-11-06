from .db import db

class Checkin(db.Model):
    __tablename__ = "checkins"

    id=db.Column(db.Integer, primary_key=True)
    review=db.Column(db.Text)
    rating=db.Column(db.Integer)
    location=db.Column(db.String)
    user_id=db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    drink_id=db.Column(db.Integer, db.ForeignKey("drinks.id"), nullable=False)
    distillery_id=db.Column(db.Integer, db.ForeignKey("distilleries.id"), nullable=False)


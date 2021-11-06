from .db import db

class Drink(db.Model):
    __tablename__ = "drinks"

    id=db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String, nullable=False)
    description=db.Column(db.Text, nullable=False)
    image=db.Column(db.String)
    abv=db.Column(db.Integer)
    rating=db.Column(db.Integer)
    distillery_id=db.Column(db.Integer, db.ForeignKey("distilleries.id"), nullable=False)
    checkin=db.relationship("Checkin", back_populates="drink")
from .db import db


class Distillery(db.Model):
    __tablename__ = "distilleries"

    id=db.Column(db.Integer, primary_key=True)
    email=db.Column(db.String, nullable=False, unique=True)
    hashed_password=db.Column(db.String, nullable=False)
    name=db.Column(db.String, nullable=False)
    street=db.Column(db.String, nullable=False)
    city=db.Column(db.String, nullable=False)
    state=db.Column(db.String, nullable=False)
    latitude=db.Column(db.Integer)
    longitude=db.Column(db.Integer)
    logo=db.Column(db.Text)
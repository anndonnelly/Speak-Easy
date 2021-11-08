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
    latitude=db.Column(db.String)
    longitude=db.Column(db.String)
    logo=db.Column(db.Text)

    
    checkin=db.relationship("Checkin", back_populates="distillery")

    def to_dict(self):
        return {
            'id': self.id,
            'email': self.email,
            'name': self.name,
            'street': self.street,
            'city': self.street,
            'state': self.state,
            'latitude': self.latitude,
            'longitude': self.longitude,
            'logo': self.logo,
            'checkin': self.logo
        }
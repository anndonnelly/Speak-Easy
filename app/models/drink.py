from .db import db


class Drink(db.Model):
    __tablename__ = "drinks"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=False)
    image = db.Column(db.String)
    abv = db.Column(db.Integer)
    rating = db.Column(db.Integer)
    distillery_id = db.Column(db.Integer, db.ForeignKey(
        "distilleries.id", ondelete="CASCADE"), nullable=False)

    checkin = db.relationship(
        "Checkin", back_populates="drink", cascade="all, delete")
    distillery = db.relationship(
        "Distillery", back_populates="drink")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
            'abv': self.abv,
            'rating': self.rating,
            'distillery_id': self.distillery_id,
            'checkin_ids': [checkin.id for checkin in self.checkin]
        }

    def to_card_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'image': self.image,
            'rating': self.rating,
            'distillery_id': self.distillery_id,
        }

from app.models import db, Checkin


def seed_checkins():
    1 = Checkin(
        review='Demo', rating='demo@aa.io', location='password', user_id="", drink_id="", distillery_id="")
    2 = Checkin(
        username='marnie', email='marnie@aa.io', password='password')
    3 = Checkin(
        username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


def undo_checkins():
    db.session.execute('TRUNCATE checkins RESTART IDENTITY CASCADE;')
    db.session.commit()
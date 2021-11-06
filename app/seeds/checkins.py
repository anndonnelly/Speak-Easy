from app.models import db, Checkin


def seed_checkins():
    demo = Checkin(
        username='Demo', email='demo@aa.io', password='password')
    marnie = Checkin(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = Checkin(
        username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


def undo_checkins():
    db.session.execute('TRUNCATE checkins RESTART IDENTITY CASCADE;')
    db.session.commit()
from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')
    brian = User(
        username='brian', email='brian@gmail.com', password='password')
    ann = User(
        username='ann', email='ann5@gmail.com', password='password')
    patricia = User(
        username='patricia', email='patricia@gmail.com', password='password')
    noel = User(
        username='noel', email='noel@gmail.com', password='password')
    jill = User(
        username='jill', email='jill@gmail.com', password='password')
    emily = User(
        username='emily', email='emily@gmail.com', password='password')
    kieran = User(
        username='kieran', email='kieran10@gmail.com', password='password')
    chris = User(
        username='chris', email='chris@gmail.com', password='password')
    neb = User(
        username='neb', email='neb@gmail.com', password='password')
    dan = User(
        username='dan', email='dan@gmail.com', password='password')
    michael = User(
        username='michael', email='michael@gmail.com', password='password')
    will = User(
        username='will', email='will15@gmail.com', password='password')
    jason = User(
        username='jason', email='jason@gmail.com', password='password')
    amy = User(
        username='amy', email='amy@gmail.com', password='password')
    charlie = User(
        username='charlie', email='charlie@gmail.com', password='password')
    garrett = User(
        username='garrett', email='garrett@gmail.com', password='password')
    patrick = User(
        username='patrick', email='patrick@gmail.com', password='password')
    

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(brian)
    db.session.add(ann)
    db.session.add(patricia)
    db.session.add(noel)
    db.session.add(jill)
    db.session.add(emily)
    db.session.add(kieran)
    db.session.add(chris)
    db.session.add(neb)
    db.session.add(dan)
    db.session.add(michael)
    db.session.add(will)
    db.session.add(jason)
    db.session.add(amy)
    db.session.add(charlie)
    db.session.add(garrett)
    db.session.add(patrick)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

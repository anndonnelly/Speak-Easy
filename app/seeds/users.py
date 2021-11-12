from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    Demo = User(
        username='Demo', email='demo@aa.io', password='password')
    Marnie = User(
        username='Marnie', email='marnie@aa.io', password='password')
    Bobbie = User(
        username='Bobbie', email='bobbie@aa.io', password='password')
    Brian = User(
        username='Brian', email='brian@gmail.com', password='password')
    Ann = User(
        username='Ann', email='ann5@gmail.com', password='password')
    Patricia = User(
        username='Patricia', email='patricia@gmail.com', password='password')
    Noel = User(
        username='Noel', email='noel@gmail.com', password='password')
    Jill = User(
        username='Jill', email='jill@gmail.com', password='password')
    Emily = User(
        username='Emily', email='emily@gmail.com', password='password')
    Kieran = User(
        username='Kieran', email='kieran10@gmail.com', password='password')
    Chris = User(
        username='Chris', email='chris@gmail.com', password='password')
    Neb = User(
        username='Neb', email='neb@gmail.com', password='password')
    Dan = User(
        username='Dan', email='dan@gmail.com', password='password')
    Michael = User(
        username='Michael', email='michael@gmail.com', password='password')
    Will = User(
        username='Will', email='will15@gmail.com', password='password')
    Jason = User(
        username='Jason', email='jason@gmail.com', password='password')
    Amy = User(
        username='Amy', email='amy@gmail.com', password='password')
    Charlie = User(
        username='Charlie', email='charlie@gmail.com', password='password')
    Garrett = User(
        username='Garrett', email='garrett@gmail.com', password='password')
    Patrick = User(
        username='Patrick', email='patrick@gmail.com', password='password')
    

    db.session.add(Demo)
    db.session.add(Marnie)
    db.session.add(Bobbie)
    db.session.add(Brian)
    db.session.add(Ann)
    db.session.add(Patricia)
    db.session.add(Noel)
    db.session.add(Jill)
    db.session.add(Emily)
    db.session.add(Kieran)
    db.session.add(Chris)
    db.session.add(Neb)
    db.session.add(Dan)
    db.session.add(Michael)
    db.session.add(Will)
    db.session.add(Jason)
    db.session.add(Amy)
    db.session.add(Charlie)
    db.session.add(Garrett)
    db.session.add(Patrick)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

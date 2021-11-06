from app.models import db, Drink

def seed_drinks():
    demo1 = Drink(
        name='Vodka', description='sour', image='xx.png', abv=1, rating=3, distillery_id=2)

    
    db.session.add(demo1)


    db.session.commit()

def undo_drinks():
    db.session.execute('TRUNCATE drinks RESTART IDENTITY CASCADE;')
    db.session.commit()
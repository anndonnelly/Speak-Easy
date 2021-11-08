from app.models import db, Drink


def seed_drinks():

    drink1 = Drink(
        name='Pineapple Whiskey Lemonade', description="1 1/2 ounces Old Humble Special Reserve. 2 1/2 ounces lemonade. 1 1/2 ounces pineapple juice", image='https://res.cloudinary.com/dis83syog/image/upload/v1636245376/SpeakEasy/Screen_Shot_2021-11-06_at_8.36.01_PM_ic8pi5.png', abv=1, rating=2, distillery_id=1)
    drink2 = Drink(
        name='The Perfect Manhattan', description='2 ounces Old Humble Special Reserve Whiskey. 3/4 ounce sweet vermouth. Two dashes bitters. ', image='https://res.cloudinary.com/dis83syog/image/upload/v1636245015/SpeakEasy/Screen_Shot_2021-11-06_at_8.29.26_PM_lme7zp.png', abv=30, rating=3, distillery_id=2)
    drink3 = Drink(
        name='The Old Fashioned', description='2 ounces Old Humble Straight Whiskey. 3/4 ounces simple syrup. 2 dashes bitters', image='https://res.cloudinary.com/dis83syog/image/upload/v1636245141/SpeakEasy/Screen_Shot_2021-11-06_at_8.32.07_PM_nma6qe.png', abv=27, rating=4, distillery_id=3)
    drink4 = Drink(
        name='The Boulevardier', description="1 1/2 ounce Old Humble Special Reserve. 1 ounce Campari. 1 ounce sweet vermouth", image='https://res.cloudinary.com/dis83syog/image/upload/v1636245542/SpeakEasy/Screen_Shot_2021-11-06_at_8.38.46_PM_av5mqc.png', abv=25, rating=3, distillery_id=4)
    drink5 = Drink(
        name='TX Strawberry Lemonade', description='2 parts TX Whiskey. 2.75 parts Lemonade. 0.25 parts Strawberry Daiquiri Mix. 1 Strawberry Slice garnish', image='https://res.cloudinary.com/dis83syog/image/upload/v1636246017/SpeakEasy/Screen_Shot_2021-11-06_at_8.46.35_PM_yo6k91.png', abv=5, rating=1, distillery_id=5)
    drink6 = Drink(
        name='Margarita', description='1/2 oz Apple moonshine. 1/2 oz lime juice. 1/2 oz sweet and sour. Squeeze 1 orange wedge. Top with sprite. Garnish with an Apple Slice in drink', image='https://www.liquor.com/thmb/T4OQkwtsPxX52KXPjyIrpBLoIJc=/735x0/margarita-720x720-primary-f4a3b044e9a746d9b88890515c3a7328.jpg', abv=33, rating=5, distillery_id=6)
    drink7 = Drink(
        name='Whiskey Mule', description='1 1/2 oz of Coastline Whiskey. 2 Fresh Mint leaves. 2 Fresh limes squeezed. Top w/Ginger beer. Garnish with mint leaves', image='https://assets.epicurious.com/photos/605b5501ca1ffc178a2d26d3/4:3/w_3108,h_2331,c_limit/Editorial_04_WhiskeySour-v4-6x4.jpg', abv=27, rating=3, distillery_id=7)
    drink8 = Drink(
        name='Southern Bell Mojito', description='1 1/2 oz Peach moonshine. 2-3 tbs Texas honey. 2 Limes. 2 Mint leaves. Top with soda. Garnish with a peach and mint leaf', image='https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg', abv=13, rating=1, distillery_id=8)
    drink9 = Drink(
        name='Salty Sea Dog', description='1 1/2 oz Texas Tail Vodka. 1 oz Grapefruit. 2 fresh squeezed Limes. 1 Tbs agave. Top with sprite. Garnish with a lime wheel', image='https://bakerbynature.com/wp-content/uploads/2021/03/Salty-Dog-2-1-of-1.jpg', abv=5, rating=3, distillery_id=9)
    drink10 = Drink(
        name='Bloody Mary', description='1 1/2 oz Vegetable Infused Texas Tail Vodka. *(add 3/4 of hotness , 3/4 vegetable Vodka for spicy ). 2-3 dashes of Worcester shire. 4-5 dashes of Tabasco. 2 squeezed Limes. Top with zing Zang. Garnish- with salt/pepper/cajun spices rim,  and a snack (lime, a pickle, olives)', image='https://www.liquor.com/thmb/pYVrft2PguqfsM62UrvxkjdRkAY=/720x720/smart/filters:no_upscale()/bloody-mary-720x720-primary-28cf1aaa79d0424d951901fcc0a42e91.jpg', abv=12, rating=3, distillery_id=10)


# https://www.thecocktaildb.com/api.php external API if we want to randomly generate 200 drinks
    db.session.add(drink1)
    db.session.add(drink2)
    db.session.add(drink3)
    db.session.add(drink4)
    db.session.add(drink5)
    db.session.add(drink6)
    db.session.add(drink7)
    db.session.add(drink8)
    db.session.add(drink9)
    db.session.add(drink10)

    db.session.commit()


def undo_drinks():
    db.session.execute('TRUNCATE drinks RESTART IDENTITY CASCADE;')
    db.session.commit()

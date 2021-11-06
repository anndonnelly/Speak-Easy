from app.models import db, Distillery

def seed_distilleries():
    still_austin = Distillery(
        email='austin.still@gmail.com', hashed_password='password', name="Still Austin Whiskey Co.", street="440 E St Elmo Rd", city="Austin", state="Texas", latitude="30° 13' 1.4592'' N", longitude="97° 45' 41.328'' W", logo="https://stillaustin.com/wp-content/uploads/2020/06/still-austin-whiskey-co-logo-square-primary-on-white.png")
    yellow_rose = Distillery(
        email='yellowrose@gmail.com', hashed_password='password2', name="Yellow Rose Distilling", street="1224 N Post Oak Rd", city="Houston", state="Texas", latitude="29° 47' 18.1104'' N", longitude="95° 27' 23.562'' W",logo="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2016/09/21134258/hQhi7ZZN.png")
    five_points = Distillery(
        email='5points@gmail.com', hashed_password='password3', name="Five Points Distilling", street="8575 Union Hill Rd", city="Forney", state="Texas", latitude="32° 44' 53.466'' N", longitude="96° 28' 18.9516'' W",logo="https://res.cloudinary.com/dis83syog/image/upload/v1636208014/SpeakEasy/Screen_Shot_2021-11-06_at_10.12.32_AM_zgguty.png")
    firestone_robertson = Distillery(
        email='fireandrob@gmail.com', hashed_password='password4', name="Firestone & Robertson Distilling Co.", street="4250 Mitchell Blvd", city="Fort Worth", state="Texas", latitude="32° 44' 35.736'' N", longitude="97° 20' 6.576'' W", logo="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2020/01/22143940/distillery0_a1208968-5056-a348-3a53f2590489c450.jpg")
    blackland = Distillery(
        email='blacklanddistillery@gmail.com', hashed_password='password5', name="Blackland Distillery", street="2616 Weisenberger St", city="Fort Worth", state="Texas", latitude="32°45′26.42′′N", longitude="97°21′13.1′′W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636208188/SpeakEasy/images_h57umn.png")
    crowded_barrel = Distillery(
        email='crowdedbarrel@gmail.com', hashed_password='password6', name="Crowded Barrel Whiskey Co.", street="16221 Crystal Hills", city="Austin", state="Texas", latitude="30° 8' 42.0576'' N", longitude="-97° 57' 59.6484'' W", logo="https://crowdedbarrelwhiskey.com/wp-content/uploads/2021/03/cb_1-black-copy-small.jpg")
    eight_wonder = Distillery(
        email='eightwonder@gmail.com', hashed_password='password7', name="8th Wonder Distillery", street="2202 Dallas St", city="Houston", state="Texas", latitude="29.7493° N", longitude="95.3555° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636208595/SpeakEasy/download_uhzz8h.png")
    old_humble = Distillery(
        email='oldhumble@gmail.com', hashed_password='password8', name="Old Humble Distilling Company", street="19103 Continental Pkwy", city="Humble", state="Texas", latitude="29.9977° N", longitude="-95.1999° W", logo="https://static.wixstatic.com/media/341c59_5979086ad71e477ea3b1432031c6e9ba.jpg/v1/fit/w_2500,h_1330,al_c/341c59_5979086ad71e477ea3b1432031c6e9ba.jpg")
    fox_seeker = Distillery(
        email='foxandseeker@hotmail.com', hashed_password='password9', name="Fox & Seeker", street="5750 N Sam Houston Pkwy", city="Houston", state="Texas", latitude="30.1020° N", longitude="-95.3275° W", logo="https://pbs.twimg.com/profile_images/993602982238339072/1eP9rwMQ.jpg")
    rebecca_creek = Distillery(
        email='rebecca_creek@hotmail.com', hashed_password='password10', name="Rebecca Creek Distillery", street="26605 Bulverde Rd", city="San Antonio", state="Texas", latitude="29.6941° N", longitude="98.4545° W", logo="https://www.rebeccacreekdistillery.com/schema-logo.png")
    ranger_creek = Distillery(
        email='rangercreek@hotmail.com', hashed_password='password11', name="Ranger Creek Brewing & Distilling", street="4834 Whirlwind Dr", city="San Antonio", state="Texas", latitude="30.5117° N", longitude="-98.3337° W", logo="https://images.squarespace-cdn.com/content/v1/59da7f606f4ca34ba294a74e/1519252036931-OUZC5KYJ59OIA63HQR7I/RangerCreek_MainLogo1.jpg")
    devils_river = Distillery(
        email='devils_river@hotmail.com', hashed_password='password12', name="Devils River Distillery", street="401 E Houston St", city="San Antonio", state="Texas", latitude="29.4268° N", longitude="98.4883° W", logo="https://www.texasbrigades.org/wp-content/uploads/2020/01/devils-river-whiskey-logo-black.jpg")
    artisan = Distillery(
        email='artisandistillery@hotmail.com', hashed_password='password13', name="Artisan Distillery Craft Bar", street="402 Austin St", city="San Antonio", state="Texas", latitude="30.9470° N", longitude="-98.5094° W", logo="https://artisans.al/wp-content/uploads/2017/10/Artisan-Logo-Finale-01-1170x399.png")
    whitmeyer = Distillery(
        email='whitmeyers@hotmail.com', hashed_password='password14', name="Whitmeyer's Distilling Co.", street="5301 Nolda St", city="Houston", state="Texas", latitude="29.7760° N", longitude="95.4161° W", logo="https://www.bourbonbanter.com/wp-content/uploads/2018/07/Whitmeyers-Distilling-Company-Header.jpg")
    hill_country = Distillery(
        email='hillcountry@hotmail.com', hashed_password='password15', name="Hill Country Distillers", street="723 Front St", city="Comfort", state="Texas", latitude="29.9676° N", longitude="98.9064° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636209253/SpeakEasy/images2_sartus.jpg")
    texas_tail = Distillery(
        email='texastail@hotmail.com', hashed_password='password16', name="Texas Tail Distillery", street="2416 Postoffice St", city="Galveston", state="Texas", latitude="29.3042° N", longitude="94.7953° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636209802/SpeakEasy/Screen_Shot_2021-11-06_at_10.42.53_AM_jlmol4.png")
    duckworth = Distillery(
        email='duckworthdistillery@hotmail.com', hashed_password='password17', name="Duckworth Distillery", street="3737 Atwell St", city="Dallas", state="Texas", latitude="32.8338° N", longitude="96.8261° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210242/SpeakEasy/Screen_Shot_2021-11-06_at_10.50.16_AM_hy7zju.png")
    deep_ellum = Distillery(
        email='deepellum@hotmail.com', hashed_password='password18', name="Deep Ellum Distillery", street="2880 Clover St", city="Dallas", state="Texas", latitude="32.7826° N", longitude="96.7826° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210524/SpeakEasy/336595_1561738304_zsxgfd.jpg")
    lockwood = Distillery(
        email='lockwooddistillery@hotmail.com', hashed_password='password19', name="Lockwood Distilling Company", street="506 Lockwood Dr", city="Richardson", state="Texas", latitude="32.9523° N", longitude="96.7360° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210730/SpeakEasy/download_1_ayoe0f.png")
    trinity_river = Distillery(
        email='trinityriver@hotmail.com', hashed_password='password20', name="Trinity River Distillery Home of Silver Star Spirits", street="1734 E El Paso St", city="Fort Worth", state="Texas", latitude="34.0635° N", longitude="-97.0187° W", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210994/SpeakEasy/unnamed_lywnzh.jpg")

    db.session.add(still_austin)
    db.session.add(yellow_rose)
    db.session.add(five_points)
    db.session.add(firestone_robertson)
    db.session.add(blackland)
    db.session.add(crowded_barrel)
    db.session.add(eight_wonder)
    db.session.add(old_humble)
    db.session.add(fox_seeker)
    db.session.add(rebecca_creek)
    db.session.add(ranger_creek)
    db.session.add(devils_river)
    db.session.add(artisan)
    db.session.add(whitmeyer)
    db.session.add(hill_country)
    db.session.add(texas_tail)
    db.session.add(duckworth)
    db.session.add(deep_ellum)
    db.session.add(lockwood)
    db.session.add(trinity_river)

    db.session.commit()


def undo_distilleries():
    db.session.execute('TRUNCATE distilleries RESTART IDENTITY CASCADE;')
    db.session.commit()
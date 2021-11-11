from app.models import db, Distillery


def seed_distilleries():
    still_austin = Distillery(
        name="Still Austin Whiskey Co.", street="440 E St Elmo Rd", city="Austin", state="Texas", latitude="30.2170", longitude="97.7614", logo="https://stillaustin.com/wp-content/uploads/2020/06/still-austin-whiskey-co-logo-square-primary-on-white.png", owner_id='1')
    yellow_rose = Distillery(
        name="Yellow Rose Distilling", street="1224 N Post Oak Rd", city="Houston", state="Texas", latitude="29.7884", longitude="95.4566", logo="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2016/09/21134258/hQhi7ZZN.png", owner_id='2')
    five_points = Distillery(
        name="Five Points Distilling", street="8575 Union Hill Rd", city="Forney", state="Texas", latitude="32.6847", longitude="96.4779", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636208014/SpeakEasy/Screen_Shot_2021-11-06_at_10.12.32_AM_zgguty.png", owner_id='3')
    firestone_robertson = Distillery(
        name="Firestone & Robertson Distilling Co.", street="4250 Mitchell Blvd", city="Fort Worth", state="Texas", latitude="32.6999", longitude="97.2901", logo="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2020/01/22143940/distillery0_a1208968-5056-a348-3a53f2590489c450.jpg", owner_id='4')
    blackland = Distillery(
        name="Blackland Distillery", street="2616 Weisenberger St", city="Fort Worth", state="Texas", latitude="32.7573", longitude="97.3536", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636208188/SpeakEasy/images_h57umn.png", owner_id='5')
    crowded_barrel = Distillery(
        name="Crowded Barrel Whiskey Co.", street="16221 Crystal Hills", city="Austin", state="Texas", latitude="30.1457", longitude="-97.9663", logo="https://crowdedbarrelwhiskey.com/wp-content/uploads/2021/03/cb_1-black-copy-small.jpg", owner_id='6')
    eight_wonder = Distillery(
        name="8th Wonder Distillery", street="2202 Dallas St", city="Houston", state="Texas", latitude="29.7493", longitude="95.3555", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636208595/SpeakEasy/download_uhzz8h.png", owner_id='7')
    old_humble = Distillery(
        name="Old Humble Distilling Company", street="19103 Continental Pkwy", city="Humble", state="Texas", latitude="29.9977", longitude="-95.1999", logo="https://static.wixstatic.com/media/341c59_5979086ad71e477ea3b1432031c6e9ba.jpg/v1/fit/w_2500,h_1330,al_c/341c59_5979086ad71e477ea3b1432031c6e9ba.jpg", owner_id='8')
    fox_seeker = Distillery(
        name="Fox & Seeker", street="5750 N Sam Houston Pkwy", city="Houston", state="Texas", latitude="30.1020", longitude="-95.3275", logo="https://pbs.twimg.com/profile_images/993602982238339072/1eP9rwMQ.jpg", owner_id='9')
    rebecca_creek = Distillery(
        name="Rebecca Creek Distillery", street="26605 Bulverde Rd", city="San Antonio", state="Texas", latitude="29.6941", longitude="98.4545", logo="https://www.rebeccacreekdistillery.com/schema-logo.png", owner_id='10')
    ranger_creek = Distillery(
        name="Ranger Creek Brewing & Distilling", street="4834 Whirlwind Dr", city="San Antonio", state="Texas", latitude="30.5117", longitude="-98.3337", logo="https://images.squarespace-cdn.com/content/v1/59da7f606f4ca34ba294a74e/1519252036931-OUZC5KYJ59OIA63HQR7I/RangerCreek_MainLogo1.jpg", owner_id='11')
    devils_river = Distillery(
        name="Devils River Distillery", street="401 E Houston St", city="San Antonio", state="Texas", latitude="29.4268", longitude="98.4883", logo="https://www.texasbrigades.org/wp-content/uploads/2020/01/devils-river-whiskey-logo-black.jpg", owner_id='12')
    artisan = Distillery(
        name="Artisan Distillery Craft Bar", street="402 Austin St", city="San Antonio", state="Texas", latitude="30.9470", longitude="-98.5094", logo="https://artisans.al/wp-content/uploads/2017/10/Artisan-Logo-Finale-01-1170x399.png", owner_id='13')
    whitmeyer = Distillery(
        name="Whitmeyer's Distilling Co.", street="5301 Nolda St", city="Houston", state="Texas", latitude="29.7760", longitude="95.4161", logo="https://www.bourbonbanter.com/wp-content/uploads/2018/07/Whitmeyers-Distilling-Company-Header.jpg", owner_id='14')
    hill_country = Distillery(
        name="Hill Country Distillers", street="723 Front St", city="Comfort", state="Texas", latitude="29.9676", longitude="98.9064", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636209253/SpeakEasy/images2_sartus.jpg", owner_id='15')
    texas_tail = Distillery(
        name="Texas Tail Distillery", street="2416 Postoffice St", city="Galveston", state="Texas", latitude="29.3042", longitude="94.7953", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636209802/SpeakEasy/Screen_Shot_2021-11-06_at_10.42.53_AM_jlmol4.png", owner_id='16')
    duckworth = Distillery(
        name="Duckworth Distillery", street="3737 Atwell St", city="Dallas", state="Texas", latitude="32.8338", longitude="96.8261", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210242/SpeakEasy/Screen_Shot_2021-11-06_at_10.50.16_AM_hy7zju.png", owner_id='17')
    deep_ellum = Distillery(
        name="Deep Ellum Distillery", street="2880 Clover St", city="Dallas", state="Texas", latitude="32.7826", longitude="96.7826", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210524/SpeakEasy/336595_1561738304_zsxgfd.jpg", owner_id='18')
    lockwood = Distillery(
        name="Lockwood Distilling Company", street="506 Lockwood Dr", city="Richardson", state="Texas", latitude="32.9523", longitude="96.7360", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210730/SpeakEasy/download_1_ayoe0f.png", owner_id='19')
    trinity_river = Distillery(
        name="Trinity River Distillery Home of Silver Star Spirits", street="1734 E El Paso St", city="Fort Worth", state="Texas", latitude="34.0635", longitude="-97.0187", logo="https://res.cloudinary.com/dis83syog/image/upload/v1636210994/SpeakEasy/unnamed_lywnzh.jpg", owner_id='20')

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

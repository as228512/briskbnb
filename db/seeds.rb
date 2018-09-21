Home.destroy_all
User.destroy_all
Booking.destroy_all
Review.destroy_all

RUSTY_QUOTES = ["Slower than haunted house spiked walls, but not as slow as evil scientist spiked walls.", "Orpheus, it's your landlord. We're trapped in a cliche. Use your fake impossible magic to get us out of here."]
DEAN_QUOTES = ["I think I figured out why the plane crashed: There were skeletons driving it!"]
HANK_QUOTES = ["I am the Bat!", "My tongue keeps getting caught in the mouth slit, it's maddening!"]
ORPHEUS_QUOTES = ["Ah, but we two souls have shared a cheese sandwich more than twice. And the stitched-together quilt of your stony silence forms a tapestry of quiet desperation", "Do not be hasty entering that room. I HAD TACO BELL FOR LUNCH!"]
MONARCH_QUOTES = ["Venture and I have been engaged in a deadly game of cat and also-cat for years!", "Revenge, like gazpacho soup, is a dish best served cold, precise, and merciless."]
NAMES = ["Rusty", "Dean", "Hank", "Orpheus", "Monarch"]



ActiveRecord::Base.transaction do
  name_idx = 0
  5.times do
    fname = NAMES[name_idx]
    e_mail = Faker::VentureBros.vehicle + '@' + Faker::VentureBros.organization + '.com'
    if name_idx != 3
      User.create!(fname: fname, lname: 'Venture', e_mail: e_mail, password: 'teamventure')
    else
      #demo user
      User.create!(fname: 'Orpheus', lname: 'Venture', e_mail: 'demo@demos.com', password: 'Demo11' )
    end

    name_idx += 1
  end

  puts "users_created"
  puts "#{User.first}"
  puts "#{User.last}"

  users_arr = User.all


  #hokkaido_1
 Home.create!(
   description: 'Our 3-bedroom house called Snow Monkey 1 is centrally located next to all major amenities, within walking distance to the ski lifts, and just steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!',
   price: 260,
   title: "3BD House-Netflix-Fireplace ★ Close to everything",
   lat: 42.857149,
   long: 140.709702,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_1.jpg"
 )

  #hokkaido_3
 Home.create!(
   description: "Full house available. The room is a Japanese style tatmi room. Stays may range from one to many days. Ample parking available, and I suggest you come by car.",
   price: 46,
   title: "A wild man\'s hideout, Hifa Ski Resort only a minute away",
   lat: 43.972340,
   long: 142.513142,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_3.jpg"
 )

  #hokkaido_2
 Home.create!(
   description: "Our 3-bedroom house is centrally located next to all the major amenities, within walking distance to the ski lifts and steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!",
   price: 359,
   title: "★3BDR Snow Monkey 2, fireplace + netflix + air-con★",
   lat: 42.859128,
   long: 140.706780,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_2.jpg"
 )

  #hokkaido_4
 Home.create!(
   description: 'Only available for groups of women, couples, or families as two women and a baby run it.
                 My house is in front of the Lake Kussharo in the Akan national park, surrounded with great nature and hot springs. Among them, Kotan Onsen, the cover photo is one of the best. It\'s right next to the lake and only a 3 minutes walk from my place.
                 The lake is surrounded by mountains and you can see the beautiful sun set from the hot spring.
                 There are many sightseeing points, hiking trails, and activities in the area.',
   price: 56,
   title: "Lakeside house and hot spring, room for two",
   lat: 43.565925,
   long: 144.342138,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_4.jpg"
 )

 #hokkaido_5
 Home.create!(
   description: '+ Only minutes walk from HAKODATE STATION!!
   + Right by the famous RED BRICK WAREHOUSES right by the BAY!
   + Super MODERN and SPACIOUS accommodation
   + Located in Central Hakodate Tourism Area
   + Walk to Ropeway and Michelin 3 star VIEW
   + Spacious bedroom with 4 double beds and 2 sofabeds in the living room
   + Safe IH stove and kitchen area
   + Big LIVING + DINING section & TV
   + A lot of NATURAL light
   + Clean and Modern BATHROOM with 2 toilets',
   price: 205,
   title: "HAKODATE LODGE* High-Quality* Private Suite* +PARK",
   lat: 41.772218,
   long: 140.728882,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_5.jpg"
 )

 #hokkaido_6
 Home.create!(
   description: '★Pocket WiFi Free Rental
                 ★Kids under 6 yrs old Free
                 ★10~15min walk Otaru Sta
                 ★7min Walk Otaru Canal
                 ★30min from Sapporo Sta by train
                 ★80min from AIrport by train
                 ★10min Drive High Way Exit

                 2 Double Bed, Sofa Bed & Futon
                 6 Adults or 2 Families 4 Adults 2 Children
                 HDTV, Kitchen, Bath Shower, Wash machine, Amenities
                 24hrs Self Checkin',
   price: 137,
   title: "1min Otaru Major St★2BR#S73★Free WiFi/Kids",
   lat: 43.199336,
   long: 140.999054,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_6.jpg"
 )



 #Alaska_1
 Home.create!(
   description: 'An authentic Alaskan cabin overlooking Creamer\'s Field Waterfowl Refuge, nestled in the edge of the woods. Outdoor and nature lovers will love the trails and wildlife viewing possible from this location. Conveniently located 5 miles from downtown. Featured on RealSimple as the most wished for Airbnb in Alaska.',
   price: 85,
   title: "Cozy Alaskan Log Cabin",
   lat: 64.893317,
   long: -147.708930,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Alaska+Homes/alaska_1.jpg"
 )

 #Alaska_2
 Home.create!(
   description: 'This upper unit duplex apartment is located on the edge of downtown where Chester Creek meets Valley of the Moon park.
                 If you\'re into running, biking or skiing, access to the trail system is at your door! Restaurants, grocery stores, and
                 local entertainment are just blocks away. This apartment is newly renovated and has all the modern amenities you\'ll need.
                 Please ask us about borrowing baby or children items for your stay. This cozy apartment is great for everyone and can
                 sleep up to seven!',
   price: 80,
   title: "Chester Creek Trail Adventures",
   lat: 61.207469,
   long: -149.894824,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Alaska+Homes/Alaska_2.jpg"
 )

 #Alaska_3
 Home.create!(
   description: 'On the ocean over looking historic Mill Bay just 3 miles from the city center.
                 Pictures from the back deck tell the complete story. The bedroom, living room and kitchen all have ocean views.
                 Upstairs has private deck overlooking Mill Bay.',
   price: 135,
   title: "Seaside Casual",
   lat: 57.824570,
   long: -152.355418,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Alaska+Homes/alaska_3.jpg"
 )

 #Alaska_4
 Home.create!(
   description: 'The cabin is in a great location at the end of Maud rd, and sits directly up against the mountains and overlooks McRoberts creek.
                 The property is a ten minute drive to downtown Palmer but still at the edge of civilization.
                 There are salmon in the creek in the late fall and Dolly Varden through the summer.
                 Start a fire in the fire pit and hang out next to the creek, or take a walk or 4 wheeler ride down the many trails that start from the cabin.
                 Moose frequent the property in winter and summer.',
   price: 100,
   title: "Cabin on the Creek",
   lat: 61.579624,
   long: -148.979354,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Alaska+Homes/Alaska_4.jpg"
 )

 #Alaska_5
 Home.create!(
   description: 'If you\'re here for ice climbing, rafting, zip-lining or simply unplugging this authentic alpine cabin is perfect.
                 With wide open views of the Chugach mountains and the Matanuska glacier, this quirky cabin is its own Alaska adventure.
                 Guests enjoy a private bedroom (with a queen bed) and private bathroom as well 2 gorgeous living rooms with 2 day beds and a very comfy couch.
                 You\'re also welcome to use the fully furnished kitchen to cook delicious meals (you must bring your own food of course) 😁',
   price: 90,
   title: "Kate’s Matanuska Glacier Cabin!!",
   lat: 61.798205,
   long: -147.784156,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Alaska+Homes/Alaska_5.jpg"
 )

 #Alaska_6
 Home.create!(
   description: 'Enjoy a real Alaskan experience!
                 Cozy log cabin in the woods, quiet area great to see Aurora Borealis and wild life;
                 10 min from downtown, UAF, Ft.Wainwright; 2 blocks from bus stop and bike route; nearby hiking and ski trails
                 Small dry cabin with outhouse, sink, water jugs for refilling, oil heater, fridge and kitchen well equipped,
                 TV with Xbox, futon for two and small loft bed for two. Good cel phone service',
   price: 45,
   title: "Cozy dry cabin in the woods, 10 min downtown/UAF 1",
   lat: 64.895593,
   long: -147.724246,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Alaska+Homes/Alaska_6.jpg"
 )


 #NewYork_1
 Home.create!(
   description: '1 bedroom cabin, Elizabethtown N.Y. "gateway to the Adirondacks".
                 20 Miles from Whiteface mountain, 25 miles from Lake Placid, 10 miles from Lake Champlain.',
   price: 125,
   title: "1 bedroom cabin, Adirondacks",
   lat: 44.218192,
   long: -73.589473,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_1.jpg"
 )

 #NewYork_2
 Home.create!(
   description: 'Four bedroom log cabin minutes off of the Northway/I87.
                 Lake George region of Adirondack Park. Located on pristine Brant Lake.
                 Bring your boat. One hour to Lake Placid and Vermont.
                 Full household amenities. No houses within 100 yards of the property.',
   price: 200,
   title: "Adirondack lakeside log cabin",
   lat: 43.687666,
   long: -73.740365,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_2.jpg"
 )

 #NewYork_3
 Home.create!(
   description: '382 Back To Sodom Rd.
                 WiFi AC
                 Close to family-friendly activities and the beach. You’ll love my place because of the high ceilings, the location, the coziness, and the views.
                 Built by a local craftsman with logs from our area and local river stone for the fireplace.
                 Cabin is completely modernized. A lovely porch looking towards the pond and exterior lights along the Pond.
                 Minutes to all outdoor activities. Pets Welcomed $50 fee.
                 Please Bring Towels, Paper Products, Soaps, Garbage Bags.',
   price: 100,
   title: "Twilight Cabin",
   lat: 43.653070,
   long: -73.997813,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_3.jpg"
 )

 #NewYork_4
 Home.create!(
   description: 'Tucked back in the woods of the Adirondacks, this private little authentic one room log cabin is not only charming
                 and inviting, but a great little get away for a couple or small family, even two couples. Provided with all the
                 basics you need, it is welcoming and cozy. A perfect getaway spot. 1 mile from snowmobile trails, linking Brantingham,
                 Tug Hill, Stillwater & Old Forge . Hiking, waterfalls, horseback riding & fishing are available on the many lakes and
                 rivers as well as state land.',
   price: 125,
   title: "Black Bear Lodge",
   lat: 43.762816,
   long: -75.314217,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_4.jpg"
 )

 #NewYork_5
 Home.create!(
   description: 'Cabin located across from Macomb State Park providing access to cross country skiing.
                 30 minute drive to Whiteface Mt. Ski Area. Sleeps 4 with 2 twins and a double in upstairs loft.
                 Fully furnished kitchen, bath with shower. Quiet space.',
   price: 75,
   title: "Cozy Cabin",
   lat: 44.614139,
   long: -73.607246,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_5.jpg"
 )

 #NewYork_6
 Home.create!(
   description: 'The East Lake Cabin is perfectly positioned to take advantage of all the Adirondacks\' has to offer.
                 A short 20 minute drive to Saranac Lake and 35 minute drive to Lake Placid. Canoes and catch and release fishing
                 of native Brook Trout are available to guests as well. There is no cell phone service and limited internet access,
                 guests often comment they like this feature! However a landline is available for United States / Canadian phone calls
                 at no charge.',
   price: 99,
   title: "Camp Arden East Lake Cabin",
   lat: 44.515862,
   long: -74.025557,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_6.jpg"
 )

 #SwissAlps_1
 Home.create!(
   description: 'Welcome to Airolo, in the small mountain village at the foot of the spectacular St Gotthard Massif.
                 A quiet apartment in the village center with mountain views.',
   price: 103,
   title: "In the middle of the Alps, Airolo",
   lat: 46.528815,
   long: 8.608717,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Swiss+Alps+Homes/SwissAlps_1.jpg"
 )

 #SwissAlps_2
 Home.create!(
   description: 'This exceptional and simple hunting hut is located at an altitude of 1650 m at the foot of the Oberalppasse
                 and at the source of the Rhine. The cottage is directly accessible by car and the MGB station is only
                 a few minutes away by foot.',
   price: 77,
   title: "Hunting lodge at the Rhine river",
   lat: 46.677782,
   long: 8.756976,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Swiss+Alps+Homes/SwissAlps_2.jpg"
 )

 #SwissAlps_3
 Home.create!(
   description: 'Modern apartment in the village center. Huge windows give a view to the river, church & mountains beyond.
                 There\'s a spacious balcony for sunbathing, eating out and lounging in summer.
                 Full facilities: underground garage, ski room, sauna, HiFi, cable TV and WiFi',
   price: 124,
   title: "Luxurious & light attic apartment.",
   lat: 46.635931,
   long: 8.593369,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Swiss+Alps+Homes/SwissAlps_3.jpg"
 )

 #SwissAlps_4
 Home.create!(
   description: 'Romantic Chalet Hotel room with Spa & Restaurant.',
   price: 144,
   title: "CHALET STELLA ALPINA - superior room",
   lat: 46.503425,
   long: 8.506567,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Swiss+Alps+Homes/SwissAlps_4.jpg"
 )

 #SwissAlps_5
 Home.create!(
   description: 'Gadestatt is our private Maiensäss. A real bijoux. Here above the roofs of Obergesteln in Obergoms,
                 you can enjoy a breathtaking view over the Goms, a proud high valley in the Valais Alps.
                 In the immediate vicinity are the Alpine passes Furka, Grimsel, & Nufenen.
                 The Maiensäss can be easily reached by car, by bike / Töff, or in a 40`Wandererung from Obergesteln.
                 The well-known Gommer Höhenweg leads not far past the hut.',
   price: 310,
   title: "A private butler to the starry sky bed",
   lat: 46.513582,
   long: 8.325200,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Swiss+Alps+Homes/SwissAlps_5.jpg"
 )

 #SwissAlps_6
 Home.create!(
   description: 'Modern loft apartment in the heart of the Swiss Alps',
   price: 155,
   title: "New Loft in the heart of the Swiss Alps (90m2)",
   lat: 46.703694,
   long: 8.851170,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Swiss+Alps+Homes/SwissAlps_6.jpg"
 )

 #Greenland_1
 Home.create!(
   description: 'We offer 3 rooms in our Blue Guesthouse to individuals and groups in our beautiful house with shared kitchen
                 and bathroom facilities. On request we also offer 3 rooms in our Red Guesthouse located next door.
                 The UNESCO site is only a few minutes away on foot as well as the city centre.
                 If you are looking for your own private house, we can accommodate you in our Green Guesthouse with 2 bed rooms and
                 1 alcove. We look forward to welcome you and offer you the best view!',
   price: 120,
   title: "Ilulissat Blue Guesthouse room 3",
   lat: 69.218858,
   long: -51.113858,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Greenland+Homes/Greenland_1.jpg"
 )

 #Greenland_2
 Home.create!(
   description: 'The house is in a very quiet area with really some really good views.',
   price: 104,
   title: "Little Yellow House",
   lat: 60.910282,
   long: -46.039591,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Greenland+Homes/Greenland_2.jpg"
 )

 #Greenland_3
 Home.create!(
   description: 'A charming house with an amazing picture-window-view of a fjord with icebergs.
                 Full kitchen, bedroom with rooftop window, fold-out couch & table in front room.
                 Wooden deck has a view of the ice cap ("Isikkivik" is the Greenlandic word for "view").
                 Electric heater for cooler days. Swedish wood-fired hot tub. Hot and cold running water in the kitchen.
                 Cold water only in sink in WC, with composting toilet. Quiet, private location at the edge of town,
                 right at the foot of Qaqqarsuaq Mountain.',
   price: 102,
   title: "Isikkivik - a house in Greenland",
   lat: 60.912840,
   long: -46.036618,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Greenland+Homes/Greenland_3.jpg"
 )

 #Greenland_4
 Home.create!(
   description: 'We offer 3 rooms in our Blue Guesthouse to individuals and groups in our beautiful house with shared kitchen
                 and bathroom facilities. On request we also offer 3 rooms in our Red Guesthouse located next door.
                 The UNESCO site is only a few minutes away on foot as well as the city centre. If you are looking for your own
                 private house, we can accommodate you in our Green Guesthouse with 2 bed rooms and 1 alcove.
                 We look forward to welcome you and offer you the best view!',
   price: 120,
   title: "Ilulissat Blue Guesthouse room 2",
   lat: 69.217570,
   long: -51.112574,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Greenland+Homes/Greenland_4.jpg"
 )

 #Greenland_5
 Home.create!(
   description: '5-star luxury apartment of 60 m2 with beautiful view of the fiord and the mountains surrounding Nuuk.
                 Quiet neighborhood. Large livingroom, kitchen with all appliances, bathroom with shower, bedroom with bed for two.
                 Sofa bed in livingroom for two. Cable TV and wifi/internet included.',
   price: 92,
   title: "Wonderful private apartment with great view",
   lat: 64.195226,
   long: -51.708105,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Greenland+Homes/Greenland_5.jpg"
 )

 #Greenland_6
 Home.create!(
   description: 'Cosy apartment with gorgeous view overlooking the mountain and fjord. The apartment is facing the hill side
                 and it\'s easy to access central Nuuk by foot, it\'s a beautiful 10 min walk to cross the pass.
                 Kitchen is fully equipped and with washing and drying facilities. Wi-fi internet is available for basic use.
                 It\'s a two bedroom apartment with living room, kitchen and bath. I stay in one of the bedrooms and host in the guest room.

                 Welcome home :)',
   price: 67,
   title: "Cosy apartment with gorgeous view :)",
   lat: 64.189534,
   long: -51.725673,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Greenland+Homes/Greenland_6.jpg"
 )

 #Toronto_1
 Home.create!(
   description: 'Make the most of Toronto from this smart and stylish central condo, a clean and comfortable base from which to
                 explore the city. The private balcony is perfect for watching the sunset after a day of sightseeing.',
   price: 188,
   title: "Central Toronto Penthouse with Large Balcony",
   lat: 43.649380,
   long: -79.397741,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Toronto+Homes/Toronto_1.jpg"
 )

 #Toronto_2
 Home.create!(
   description: 'A FORMER FOUR SEASONS HOTEL Suite. Located In the heart of YORKVILLE, steps to UNIVERSITY of TORONTO.
           MANAGED BY AN AIRBNB PLUS CERTIFIED HOST. Business traveller preferred. Laptop with All in one printer.
           Family friendly. WHOLE FOODS at your door.',
   price: 152,
   title: "Hotel Style Executive Condominium near U of T and Rom",
   lat: 43.673624,
   long: -79.393517,
   user_id: users_arr[2].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Toronto+Homes/Toronto_2.jpg"
 )

 #Toronto_3
 Home.create!(
   description: 'Located in the heart of Toronto\'s most popular downtown area, the Fashion District, in King West is centrally
                 located and steps to the hottest restaurants, shopping, attractions and nightlife.
                 This particular boutique condo has been professionally designed and voted Fashions Districts
                 "Best Under 500 sqft Small Condo Design" by HGTV',
   price: 124,
   title: "Luxury Boutique Condo Downtown WIFI",
   lat: 43.646002,
   long: -79.403050,
   user_id: users_arr[3].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Toronto+Homes/Toronto_3.jpg"
 )

 #Toronto_4
 Home.create!(
   description: 'If you love views, this is the place to be! Unbelievable views of the CN Tower and the Toronto skyline.
                 My one bedroom downtown suite is right out of a magazine.
                 Directly across from Union Station, ACC, Longo\'s Grocery Store, Starbucks, Restaurants, Pharmacy & TD Bank.
                 Steps to Toronto\'s Harbourfront, Lakefront, and the Financial & Entertainment Districts.
                 If you want to be in the centre of it all, look no further.
                 This building was recently ranked as the top ten in the world.',
   price: 140,
   title: "Unbelievable Views of Toronto",
   lat: 43.643210,
   long: -79.383600,
   user_id: users_arr[4].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Toronto+Homes/Toronto_4.jpg"
 )

 #Toronto_5
 Home.create!(
   description: 'Great view
                 Downtown entertainment district
                 Walking distance to restaurants, bars, groceries and coffee shops
                 Brand new
                 Lots of amenities
                 Full kitchen',
   price: 94,
   title: "Gorgeous view Downtown Toronto",
   lat: 43.642766,
   long: -79.396651,
   user_id: users_arr[0].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Toronto+Homes/Toronto_5.jpg"
 )

 #Toronto_6
 Home.create!(
   description: 'Luxury high sky view suite in the heart of Toronto- York st, located just steps to the Union Station,
                 CN tower, Rogers center, Air Canada Center and many others.',
   price: 186,
   title: "50+Floor Luxury Sky View Suite DT Toronto",
   lat: 43.642253,
   long: -79.382894,
   user_id: users_arr[1].id,
   home_url: "https://s3.amazonaws.com/briskavatars/homes/Toronto+Homes/Toronto_6.jpg"
 )

 puts "# of homes:#{Home.all.length}"


 # start_date: DateTime.strptime("08/15/2018 4:00", "%m/%d/%Y %H:%M"),
 # end_date: DateTime.strptime("08/19/2018 4:00", "%m/%d/%Y %H:%M")

 current_user_id = User.first.id
 current_home_id = Home.first.id
 day = 1
 month = 1
 year = 2018

 180.times do
   current_date = DateTime.strptime("#{month}/#{day}/#{year} 10:00", "%m/%d/%Y %H:%M")
   end_date = current_date + 1
   puts "#{current_date} - #{end_date}"

   Booking.create!(
     start_date: current_date,
     end_date: end_date,
     user_id: current_user_id,
     home_id: current_home_id,
     reviewed: true
   )

   if day == 27 && month == 12
     year += 1
     month = 1
     day = 0
   end
   month += 1 if day == 27
   day == 27 ? day = 1 : day += 2

   current_user_id == User.last.id ? current_user_id = User.first.id : current_user_id += 1
   current_home_id == Home.last.id ? current_home_id = Home.first.id : current_home_id += 1
 end

 puts "# of bookings:#{Booking.all.length}"

 current_user_id = User.first.id
 current_home_id = Home.first.id
 day = 1
 month = 1
 year = 2018

 180.times do
   current_date = DateTime.strptime("#{month}/#{day}/#{year} 10:00", "%m/%d/%Y %H:%M")
   fname = User.find_by(id: current_user_id).fname
   booking_id = Booking.find_by(user_id: current_user_id, home_id: current_home_id, start_date: current_date).id

   case fname
   when "Rusty"
     body = RUSTY_QUOTES[rand(0..1)]
   when "Dean"
     body = DEAN_QUOTES[0]
   when "Hank"
     body = HANK_QUOTES[rand(0..1)]
   when "Orpheus"
     body = ORPHEUS_QUOTES[rand(0..1)]
   when "Monarch"
     body = MONARCH_QUOTES[rand(0..1)]
   end



   Review.create!(
     rating: rand(1..5),
     body: body,
     user_id: current_user_id,
     home_id: current_home_id,
     booking_id: booking_id
   )

   if day == 27 && month == 12
     year += 1
     month = 1
     day = 0
   end
   month += 1 if day == 27
   day == 27 ? day = 1 : day += 2

   current_user_id == User.last.id ? current_user_id = User.first.id : current_user_id += 1
   current_home_id == Home.last.id ? current_home_id = Home.first.id : current_home_id += 1
 end

 puts "# of reviews:#{Review.all.length}"

 User.create!(fname: "Andrew", lname: "Schumacher", e_mail: "as228512@ohio.edu", password: "redline369")
end

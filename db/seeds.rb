Home.destroy_all
User.destroy_all
Booking.destroy_all

User.create!(
  e_mail: 'demo@demos.com',
  fname: 'Demo',
  lname: 'Demo',
  password: 'Demo11'
)

User.create!(
  id: 100,
  e_mail: 'hokkaido@hokkaido.com',
  fname: 'Demo',
  lname: 'Demo',
  password: 'password'
)

 #hokkaido_1
Home.create!(
  description: 'Our 3-bedroom house called Snow Monkey 1 is centrally located next to all major amenities, within walking distance to the ski lifts, and just steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!',
  price: 260,
  title: "3BD House+Netflix+Fireplace ★ Close to everything",
  lat: 42.857149,
  long: 140.709702,
  user_id: 100,
  home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_1.jpg"
)

 #hokkaido_3
Home.create!(
  description: "Full house available. The room is a Japanese style tatmi room. Stays may range from one to many days. Ample parking available, and I suggest you come by car.",
  price: 46,
  title: "A wild man\'s hideout with a hearthplate, only one minute by car to Hifa Ski Resort",
  lat: 43.972340,
  long: 142.513142,
  user_id: 100,
  home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_3.jpg"
)

 #hokkaido_2
Home.create!(
  description: "Our 3-bedroom house is centrally located next to all the major amenities, within walking distance to the ski lifts and steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!",
  price: 359,
  title: "★3BDR Snow Monkey 2, fireplace + netflix + air-con★",
  lat: 42.859128,
  long: 140.706780,
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
  home_url: "https://s3.amazonaws.com/briskavatars/homes/Hokkaido+Homes/hokkaido_6.jpg"
)



#Alaska_1
Home.create!(
  description: 'An authentic Alaskan cabin overlooking Creamer\'s Field Waterfowl Refuge, nestled in the edge of the woods. Outdoor and nature lovers will love the trails and wildlife viewing possible from this location. Conveniently located 5 miles from downtown. Featured on RealSimple as the most wished for Airbnb in Alaska.',
  price: 85,
  title: "Cozy Alaskan Log Cabin",
  lat: 64.893317,
  long: -147.708930,
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
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
  user_id: 100,
  home_url: "https://s3.amazonaws.com/briskavatars/homes/New+York+Homes/NewYork_3.jpg"
)

#NewYork_4
Home.create!(
  description: 'An authentic Alaskan cabin overlooking Creamer\'s Field Waterfowl Refuge, nestled in the edge of the woods. Outdoor and nature lovers will love the trails and wildlife viewing possible from this location. Conveniently located 5 miles from downtown. Featured on RealSimple as the most wished for Airbnb in Alaska.',
  price: 400,
  title: "Moiwa Onsen House - Private Onsen, Full House",
  lat: 64.836378,
  long: -147.717240,
  user_id: 100,
  home_url: "https://s3.console.aws.amazon.com/s3/object/briskavatars/homes/hokkaido_thumb1.jpg?region=us-east-2&tab=overview"
)

#NewYork_5
Home.create!(
  description: 'Our 3-bedroom house called Snow Monkey 1 is centrally located next to all major amenities, within walking distance to the ski lifts, and just steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!',
  price: 9001,
  title: "3BD House+Netflix+Fireplace ★ Close to everything",
  lat: 42.857149,
  long: 140.709702,
  user_id: 100,
  home_url: "https://s3.console.aws.amazon.com/s3/object/briskavatars/homes/hokkaido_thumb1.jpg?region=us-east-2&tab=overview"
)

#NewYork_6
Home.create!(
  description: 'An authentic Alaskan cabin overlooking Creamer\'s Field Waterfowl Refuge, nestled in the edge of the woods. Outdoor and nature lovers will love the trails and wildlife viewing possible from this location. Conveniently located 5 miles from downtown. Featured on RealSimple as the most wished for Airbnb in Alaska.',
  price: 400,
  title: "Moiwa Onsen House - Private Onsen, Full House",
  lat: 64.836378,
  long: -147.717240,
  user_id: 100,
  home_url: "https://s3.console.aws.amazon.com/s3/object/briskavatars/homes/hokkaido_thumb1.jpg?region=us-east-2&tab=overview"
)

Home.create!(
  description: 'Our 3-bedroom house called Snow Monkey 1 is centrally located next to all major amenities, within walking distance to the ski lifts, and just steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!',
  price: 9001,
  title: "3BD House+Netflix+Fireplace ★ Close to everything",
  lat: 42.857149,
  long: 140.709702,
  user_id: 100,
  home_url: "https://s3.console.aws.amazon.com/s3/object/briskavatars/homes/hokkaido_thumb1.jpg?region=us-east-2&tab=overview"
)

Home.create!(
  description: 'An authentic Alaskan cabin overlooking Creamer\'s Field Waterfowl Refuge, nestled in the edge of the woods. Outdoor and nature lovers will love the trails and wildlife viewing possible from this location. Conveniently located 5 miles from downtown. Featured on RealSimple as the most wished for Airbnb in Alaska.',
  price: 400,
  title: "Moiwa Onsen House - Private Onsen, Full House",
  lat: 64.836378,
  long: -147.717240,
  user_id: 100,
  home_url: "https://s3.console.aws.amazon.com/s3/object/briskavatars/homes/hokkaido_thumb1.jpg?region=us-east-2&tab=overview"
)

Home.create!(
  id: 100,
  description: 'An authentic Alaskan cabin overlooking Creamer\'s Field Waterfowl Refuge, nestled in the edge of the woods. Outdoor and nature lovers will love the trails and wildlife viewing possible from this location. Conveniently located 5 miles from downtown. Featured on RealSimple as the most wished for Airbnb in Alaska.',
  price: 400,
  title: "Moiwa Onsen House - Private Onsen, Full House",
  lat: 64.836378,
  long: -147.717240,
  user_id: 100,
  home_url: "https://s3.console.aws.amazon.com/s3/object/briskavatars/homes/hokkaido_thumb1.jpg?region=us-east-2&tab=overview"
)

Booking.create!(
  start_date: DateTime.strptime("06/04/2018 8:00", "%m/%d/%Y %H:%M"),
  end_date: DateTime.strptime("06/07/2018 16:00", "%m/%d/%Y %H:%M"),
  user_id: 100,
  home_id: 100
)

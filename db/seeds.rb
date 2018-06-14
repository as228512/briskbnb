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

Home.delete_all
User.delete_all

User.create!(
  e_mail: 'demo@demo.com',
  fname: 'Demo',
  lname: 'Demo',
  password: 'password'
)

User.create!(
  e_mail: 'hokkaido@hokkaido.com',
  fname: 'Demo',
  lname: 'Demo',
  password: 'password'
)


Home.create!(
  description: 'Our 3-bedroom house called Snow Monkey 1 is centrally located next to all major amenities, within walking distance to the ski lifts, and just steps away from the hot spring. It is the perfect place to chill around the fireplace after a long day in the famous Niseko snow!',
  lat: 42.857149,
  long: 140.709702,
  user_id: 14
)

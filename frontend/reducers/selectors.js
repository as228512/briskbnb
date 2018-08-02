import moment from "moment";

export const selectHome = ({ homes }, homeId) => {
  return homes[homeId] || { reviewIds: [], bookingIds: [] };
};

const calculateDaysBetweenDates = (startDate, endDate) => {
  let bookedDates = [];

  let currentDate = moment(startDate).startOf("day");
  let lastDate = moment(endDate).startOf("day");

  do {
    bookedDates.push(currentDate.clone().toDate());
  } while (currentDate.add(1, "days").diff(lastDate) < 1);

  return bookedDates;
};

export const selectBookingsForHome = home => {
  let bookedDates = [];
  let homeReservationInformation = home.bookingIds.map(
    bookingId => home.bookings[bookingId]
  );

  for (let i = 0; i < homeReservationInformation.length; i++) {
    let startDate = homeReservationInformation[i].start_date;
    let endDate = homeReservationInformation[i].end_date;
    bookedDates.push(calculateDaysBetweenDates(startDate, endDate));
  }

  let concatedDates = [];
  for (let i = 0; i < bookedDates.length; i++) {
    for (let j = 0; j < bookedDates[i].length; j++) {
      concatedDates.push(bookedDates[i][j]);
    }
  }

  return concatedDates;
};

export const asArray = ({ homes }) => Object.keys(homes).map(key => homes[key]);

export const asSortedArray = ({ homes, bookings }) => {
  let orderedBookings = [];

  //extracts dates and home_id from bookings, pushing them into a workable array
  //of sub-arrays ex. format [[start_date, end_date, home_id],
  //                          [start_date2, end_date2, home_id2]]
  Object.keys(bookings).forEach(key => {
    orderedBookings.push([
      bookings[key]["start_date"],
      bookings[key]["end_date"],
      bookings[key]["home_id"]
    ]);
  });
  // 2 > think about how we would pass the dates of each booking through to be displayed under
  //     each relevent home (multiple dates for 1 home, for some)

  //sorts by start date, not by order of booking creation / O(n log n) at worst
  orderedBookings = orderedBookings.sort();

  //itterates over each sorted booking, keys into homes hash via "home_id"
  //and pushes home objects, in order of start_date, into the result array (orderedTrips)
  let orderedTrips = new Set();
  orderedBookings.forEach(booking => {
    orderedTrips.add(homes[booking[2]]);
  });

  let orderedTripsArray = Array.from(orderedTrips);

  if (!orderedTripsArray[0]) return [];
  else return orderedTripsArray;
};

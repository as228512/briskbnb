import moment from "moment";

//in the case home info hasn't been fetched yet, empty object with relevant
//fields are populated as placeholders to prevent crash
export const selectHome = ({ homes }, homeId) => {
  return homes[homeId] || { reviewIds: [], bookingIds: [], reviews: [] };
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

//home passed in as a result of #selectHome
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

export const reviewStats = reviews => {
  if (!reviews) return { averageRating: 0, timesReviewed: "" };
  const userReviews = Object.keys(reviews).map(key => reviews[key]);

  let average = 0;
  userReviews.forEach(review => {
    average += review.rating;
  });

  let reviewStats = {};
  reviewStats["averageRating"] = average / userReviews.length || "";
  reviewStats["timesReviewed"] = userReviews.length;

  return reviewStats;
};

export const asArray = objects => {
  if (Object.keys(objects).includes("homes")) objects = objects.homes;
  return Object.keys(objects).map(key => objects[key]);
};

export const nonReviewedTrips = (bookings, currentUserId) => {
  let userBookings = formatBookings(bookings, currentUserId, true);

  let nonReviewedTrips = [];

  userBookings.forEach(booking => {
    if (new Date() > new Date(booking[1])) {
      nonReviewedTrips.push(booking);
    }
  });

  return nonReviewedTrips;
};

const formatBookings = (bookings, currentUserId, nonReviewedTrips = false) => {
  let orderedBookingsArray = [];

  //extracts dates and home_id from currentUser's bookings, pushing them into a workable array
  //of sub-arrays ex. format [[start_date, end_date, home_id, id],
  //                          [start_date2, end_date2, home_id2, id]]
  //tests to see if nonReviewedTrips() OR tripsIndex is calling it, to determine whether "reviewed" status is relevant
  Object.keys(bookings).forEach(key => {
    if (nonReviewedTrips && bookings[key]["reviewed"]) {
      return true;
    } else if (bookings[key]["user_id"] === currentUserId) {
      orderedBookingsArray.push([
        bookings[key]["start_date"],
        bookings[key]["end_date"],
        bookings[key]["home_id"],
        bookings[key]["id"]
      ]);
    }
  });

  //sorts by "start_date", not by order of booking creation / O(n log n) at worst
  orderedBookingsArray = orderedBookingsArray.sort();
  return orderedBookingsArray;
};

export const asSortedArray = ({ homes, bookings, users }) => {
  const currentUserId = Object.values(users)[0]["id"];
  let orderedBookings = formatBookings(bookings, currentUserId);

  //itterates over each sorted booking, keys into homes hash via "home_id"
  //and pushes home objects, in order of start_date, into the result array (orderedTrips)
  let orderedTrips = new Set();
  orderedBookings.forEach(booking => {
    if (homes[booking[2]]) {
      orderedTrips.add(homes[booking[2]]);
    }
  });

  let orderedTripsArray = Array.from(orderedTrips);

  if (!orderedTripsArray[0]) return [];
  else return orderedTripsArray;
};

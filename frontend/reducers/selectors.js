import moment from 'moment';

export const selectHome = ({ homes }, homeId) => {
  return homes[homeId] || { reviewIds: [], bookingIds: [] };
};

const calculateDaysBetweenDates = (startDate, endDate) => {
  let bookedDates = [];

  let currentDate = moment(startDate).startOf('day');
  let lastDate = moment(endDate).startOf('day');

  do {
    console.log(currentDate.toDate());
    bookedDates.push(currentDate.clone().toDate());
  } while(currentDate.add(1, 'days').diff(lastDate) < 1);

  return bookedDates;
}


export const selectBookingsForHome = (home) => {
  let bookedDates = [];

  let homeReservationInformation = home.bookingIds.map(bookingId => home.bookings[bookingId]);

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

export const asArray = ({ homes }) => (
  Object.keys(homes).map(key => homes[key])
);

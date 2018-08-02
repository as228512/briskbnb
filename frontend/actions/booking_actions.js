import * as APIUtil from "../util/booking_api_util";

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const CREATE_BOOKING = "CREATE_BOOKING";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const CLEAR_BOOKING_ERRORS = "CLEAR_BOOKING_ERRORS";
export const RECEIVE_TRIPS = "RECEIVE_TRIPS";

export const receiveBooking = ({ booking, user }) => ({
  type: RECEIVE_BOOKING,
  booking,
  user
});

export const receiveTrips = trips => ({
  type: RECEIVE_TRIPS,
  trips
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
});

export const fetchTrips = () => dispatch =>
  APIUtil.fetchTrips().then(trips => dispatch(receiveTrips(trips)));

export const createBooking = booking => dispatch =>
  APIUtil.createBooking(booking).then(
    booking => dispatch(receiveBooking(booking)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const resetBookingErrors = () => dispatch =>
  dispatch(clearBookingErrors());

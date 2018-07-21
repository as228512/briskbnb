import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKING = 'RECEIVE_BOOKING';
export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const CREATE_BOOKING = 'CREATE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export const receiveBooking = ({booking, user}) => ({
  type: RECEIVE_BOOKING,
  booking,
  user,
});

export const receiveErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
});

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS,
})

export const fetchBookings = homeId => dispatch => (
  APIUtil.fetchBookings(homeId).then(bookings => (
    dispatch(receiveBookings(bookings))
  ))
);

export const createBooking = booking => dispatch => (
  APIUtil.createBooking(booking).then(booking => (
    dispatch(receiveBooking(booking))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const resetBookingErrors = () => dispatch => (
  dispatch(clearBookingErrors())
);

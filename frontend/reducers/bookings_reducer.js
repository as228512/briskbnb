import merge from 'lodash/merge';

import { RECEIVE_BOOKING } from '../actions/booking_actions';
import { RECEIVE_BOOKINGS } from '../actions/booking_actions';



const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_BOOKING:
      const newBooking = { [action.booking.id]: action.booking };
      return merge({}, state, newBooking);

    case RECEIVE_BOOKINGS:
      return action.bookings;

    default:
      return state;
  }
};

export default bookingsReducer;

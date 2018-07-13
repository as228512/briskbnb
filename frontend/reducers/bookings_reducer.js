import merge from 'lodash/merge';

import { RECEIVE_HOME } from '../actions/home_actions';
import { RECEIVE_BOOKING,
         RECEIVE_BOOKINGS
       } from '../actions/booking_actions';



const bookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_HOME:
      return merge({}, state, action.bookings);

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

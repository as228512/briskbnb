import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS
} from "../actions/booking_actions";

export default (state = [], action) => {
  debugger;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;

    case CLEAR_BOOKING_ERRORS:
    case RECEIVE_BOOKING:
      return [];

    default:
      return state;
  }
};

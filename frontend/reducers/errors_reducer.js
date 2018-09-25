import { combineReducers } from "redux";

import session from "./session_errors_reducer";
import bookings from "./bookings_form_errors_reducer";
import reviews from "./review_form_errors_reducer";

export default combineReducers({
  session,
  bookings,
  reviews
});

import { combineReducers } from "redux";
import users from "./users_reducer";
import homes from "./homes_reducer";
import bookings from "./bookings_reducer";
import reviews from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users,
  homes,
  bookings,
  reviews
});

export default entitiesReducer;

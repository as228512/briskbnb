import merge from "lodash/merge";

import { RECEIVE_HOME } from "../actions/home_actions";
import { RECEIVE_REVIEWS } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOME:
    case RECEIVE_REVIEWS:
      return merge({}, state, action.reviews);

    default:
      return state;
  }
};

export default reviewsReducer;

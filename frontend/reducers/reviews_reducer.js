import merge from "lodash/merge";

import { RECEIVE_HOME } from "../actions/home_actions";
import { RECEIVE_REVIEWS } from "../actions/review_actions";
import { GET_USER_INFO } from "../actions/user_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOME:
    case RECEIVE_REVIEWS:
      debugger;
      return merge({}, state, action.reviews);

    case GET_USER_INFO:
      debugger;
      return merge({}, state, action.userInfo);

    default:
      return state;
  }
};

export default reviewsReducer;

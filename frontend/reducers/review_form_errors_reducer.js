import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS
} from "../actions/review_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;

    case RECEIVE_REVIEWS:
    case CLEAR_REVIEW_ERRORS:
      return [];

    default:
      return state;
  }
};

import merge from "lodash/merge";

import {
  RECEIVE_HOMES,
  RECEIVE_HOME,
  CLEAR_HOMES
} from "../actions/home_actions";

const homesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_HOMES:
      return action.homes;

    case CLEAR_HOMES:
      return {};

    case RECEIVE_HOME:
      const newHome = { [action.home.id]: action.home };
      return Object.assign({}, state, newHome);

    default:
      return state;
  }
};

export default homesReducer;

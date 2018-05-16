import merge from 'lodash/merge';

import { RECEIVE_HOMES, RECEIVE_HOME } from '../actions/home_actions';



const homesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {

    case RECEIVE_HOMES:
      return action.homes;
      
    case RECEIVE_HOME:
      const newHome = { [action.home.id]: action.home };
      return merge({}, state, newHome);

    default:
      return state;
  }
};

export default homesReducer;

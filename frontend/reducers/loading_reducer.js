import { RECEIVE_HOMES, RECEIVE_HOME, START_LOADING_HOMES, START_LOADING_HOME } from "../actions/home_actions";

const initialState = {
  indexLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOMES:
      return Object.assign({}, state, { indexLoading: false });

    case RECEIVE_HOME:
      return Object.assign({}, state, { homeLoading: false });

    case START_LOADING_HOMES:
      return Object.assign({}, state, { indexLoading: true });

    case START_LOADING_HOME:
      return Object.assign({}, state, { homeLoading: true });

    default:
      return state;
  }
};

export default loadingReducer;

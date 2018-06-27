import { RECEIVE_HOMES, START_LOADING_HOMES } from "../actions/home_actions";

const initialState = {
  indexLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOMES:
      return Object.assign({}, state, { indexLoading: false });

    case START_LOADING_HOMES:
      return Object.assign({}, state, { indexLoading: true });

    default:
      return state;
  }
};

export default loadingReducer;

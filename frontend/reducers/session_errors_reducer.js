import { RECEIVE_SESSION_ERRORS,
         RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case OPEN_MODAL:
    case CLOSE_MODAL:
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

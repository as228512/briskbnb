import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";
import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
} from "../actions/session_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case OPEN_MODAL:
    case CLOSE_MODAL:
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

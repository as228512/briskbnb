import {
  OPEN_MODAL,
  OPEN_REVIEW_MODAL,
  CLOSE_MODAL
} from "../actions/modal_actions";

export default function modalReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;

    case OPEN_REVIEW_MODAL:
      return [
        action.modal,
        action.homeId,
        action.bookingId,
        action.component,
        action.requestType,
        action.reviewId
      ];

    case CLOSE_MODAL:
      return null;

    default:
      return state;
  }
}

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_REVIEW_MODAL = "OPEN_REVIEW_MODAL";

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

//reviewId only in the case that review is an edit
export const openReviewModal = (
  modal,
  homeId,
  bookingId,
  component,
  requestType,
  reviewId
) => {
  return {
    type: OPEN_REVIEW_MODAL,
    modal,
    homeId,
    bookingId,
    component,
    requestType,
    reviewId
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

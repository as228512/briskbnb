export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_REVIEW_MODAL = "OPEN_REVIEW_MODAL";

export const openModal = modal => {
  return {
    type: OPEN_MODAL,
    modal
  };
};

//review only in the case that request is an EDIT
export const openReviewModal = (
  modal,
  homeId,
  bookingId,
  component,
  requestType,
  review
) => {
  return {
    type: OPEN_REVIEW_MODAL,
    modal,
    homeId,
    bookingId,
    component,
    requestType,
    review
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

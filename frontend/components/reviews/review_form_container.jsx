import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import { updateReviewedBooking } from "../../actions/booking_actions";
import ReviewForm from "./review_form";

const mapDispatchToProps = dispatch => {
  return {
    processForm: review => dispatch(createReview(review)),
    updateReviewedBooking: bookingId =>
      dispatch(updateReviewedBooking(bookingId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);

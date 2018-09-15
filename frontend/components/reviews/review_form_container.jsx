import React from "react";
import { connect } from "react-redux";
import { createReview, editReview } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import { updateReviewedBooking } from "../../actions/booking_actions";
import { fetchHome } from "../../actions/home_actions";

import ReviewForm from "./review_form";

const mapDispatchToProps = dispatch => {
  return {
    processForm: review => dispatch(createReview(review)),
    updateForm: review => dispatch(editReview(review)),
    updateReviewedBooking: bookingId =>
      dispatch(updateReviewedBooking(bookingId)),
    fetchHome: homeId => dispatch(fetchHome(homeId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);

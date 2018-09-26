import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { updateReviewedBooking } from "../../actions/booking_actions";
import { fetchHome, eraseHomes } from "../../actions/home_actions";
import { createReview, editReview } from "../../actions/review_actions";

import ReviewForm from "./review_form";

const mapStateToProps = state => {
  const errors = state.errors.reviews;
  return {
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: review => dispatch(createReview(review)),
    updateForm: review => dispatch(editReview(review)),
    updateReviewedBooking: bookingId =>
      dispatch(updateReviewedBooking(bookingId)),
    eraseHomes: () => dispatch(eraseHomes()),
    fetchHome: homeId => dispatch(fetchHome(homeId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

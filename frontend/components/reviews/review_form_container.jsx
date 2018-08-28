import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const mapDispatchToProps = dispatch => {
  return {
    processForm: (review, homeId) => dispatch(createReview(review, homeId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);

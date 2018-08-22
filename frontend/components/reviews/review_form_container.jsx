import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = disptach => ({
  processForm: review => dispatch(createReview(review)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);

import { connect } from "react-redux";
import { openReviewModal } from "../../actions/modal_actions";

import ReviewButton from "./review_button";

const mapDispatchToProps = dispatch => ({
  openReviewModal: (
    modal,
    homeId,
    bookingId,
    component,
    requestType,
    reviewId
  ) =>
    dispatch(
      openReviewModal(
        modal,
        homeId,
        bookingId,
        component,
        requestType,
        reviewId
      )
    )
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewButton);

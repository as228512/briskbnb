import { connect } from "react-redux";
import { openReviewModal } from "../../actions/modal_actions";

import ReviewButton from "./review_button";

const mapDispatchToProps = dispatch => ({
  openReviewModal: (modal, homeId, bookingId, component) =>
    dispatch(openReviewModal(modal, homeId, bookingId, component))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewButton);

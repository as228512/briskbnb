import { connect } from "react-redux";
import { openReviewModal } from "../../actions/modal_actions";
import ReviewButton from "./review_button";

const mapDispatchToProps = dispatch => ({
  openReviewModal: (modal, homeId, bookingId) =>
    dispatch(openReviewModal(modal, homeId, bookingId))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewButton);

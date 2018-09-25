import { connect } from "react-redux";
import { openReviewModal } from "../../actions/modal_actions";
import { deleteReview } from "../../actions/review_actions";
import { updateReviewedBooking } from "../../actions/booking_actions";

import { fetchHome, eraseHomes } from "../../actions/home_actions";

import ReviewButton from "./review_button";

const mapDispatchToProps = dispatch => ({
  deleteReview: review => dispatch(deleteReview(review)),
  updateReviewedBooking: bookingId =>
    dispatch(updateReviewedBooking(bookingId)),
  fetchHome: homeId => dispatch(fetchHome(homeId)),
  eraseHomes: () => dispatch(eraseHomes()),
  openReviewModal: (modal, homeId, bookingId, component, requestType, review) =>
    dispatch(
      openReviewModal(modal, homeId, bookingId, component, requestType, review)
    )
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewButton);

import { connect } from "react-redux";
import { openReviewModal } from "../../actions/modal_actions";
import { deleteReview } from "../../actions/review_actions";
import { updateReviewedBooking } from "../../actions/booking_actions";
import { fetchHome, eraseHomes } from "../../actions/home_actions";
import {
  asArray,
  selectHome,
  nonReviewedTrips
} from "../../reducers/selectors";

import Comments from "./comments";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.id;
  const reviews = asArray(ownProps.reviews || []);
  const pendingReviews = nonReviewedTrips(
    ownProps.home.bookings || {},
    currentUser
  );
  const commenters = ownProps.home.users || {};

  return {
    currentUser,
    reviews,
    pendingReviews,
    commenters
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: review => dispatch(deleteReview(review)),
    updateReviewedBooking: bookingId =>
      dispatch(updateReviewedBooking(bookingId)),
    eraseHomes: () => dispatch(eraseHomes()),
    fetchHome: homeId => dispatch(fetchHome(homeId)),
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

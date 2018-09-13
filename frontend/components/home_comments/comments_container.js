import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
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

export default connect(
  mapStateToProps,
  null
)(Comments);

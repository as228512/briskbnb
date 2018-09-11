import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import { fetchCommenterInfo } from "../../actions/user_actions";
import {
  asArray,
  selectHome,
  nonReviewedTrips
} from "../../reducers/selectors";

import Comments from "./comments";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.id;
  const reviews = asArray(ownProps.reviews || []);
  debugger;
  const pendingReviews = nonReviewedTrips(
    ownProps.home.bookings || {},
    currentUser
  );

  return {
    currentUser,
    reviews,
    pendingReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: homeId => dispatch(fetchReviews(homeId)),
    fetchCommenterInfo: userId => dispatch(fetchCommenterInfo(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

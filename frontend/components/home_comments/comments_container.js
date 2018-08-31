import { connect } from "react-redux";

import { fetchReviews } from "../../actions/review_actions";
import { fetchCommenterInfo } from "../../actions/user_actions";
import { asArray, selectHome } from "../../reducers/selectors";
import Comments from "./comments";

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.id;
  const homeId = ownProps.homeId;
  const reviews = asArray(ownProps.reviews || []);

  return {
    currentUser,
    reviews
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

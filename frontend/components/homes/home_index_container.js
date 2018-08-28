import { connect } from "react-redux";
import { openReviewModal } from "../../actions/modal_actions";
import HomeIndex from "./home_index";

const mapDispatchToProps = (dispatch, ownProps) => ({
  openReviewModal: (modal, homeId) => dispatch(openReviewModal(modal, homeId))
});

export default connect(
  null,
  mapDispatchToProps
)(HomeIndex);

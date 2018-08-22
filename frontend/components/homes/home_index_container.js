import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import HomeIndex from "./home_index";

const mapDispatchToProps = (dispatch, ownProps) => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  null,
  mapDispatchToProps
)(HomeIndex);

import { connect } from "react-redux";

import { fetchBookings } from "../../actions/booking_actions";
import Trips from "./trips";

const mapStateToProps = state => {
  debugger;
  return state;
};

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);

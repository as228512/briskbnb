import { connect } from "react-redux";

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

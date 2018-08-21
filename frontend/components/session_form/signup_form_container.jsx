import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import {
  openSessionModal,
  closeSessionModal
} from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "signup"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    otherForm: (
      <a onClick={() => dispatch(openSessionModal("login"))}>Log in</a>
    ),
    closeSessionModal: () => dispatch(closeSessionModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

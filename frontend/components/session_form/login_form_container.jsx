import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, guestLogin } from "../../actions/session_actions";
import {
  openSessionModal,
  closeSessionModal
} from "../../actions/modal_actions";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    processGuest: user => dispatch(guestLogin(user)),
    otherForm: (
      <a onClick={() => dispatch(openSessionModal("signup"))}>Sign up</a>
    ),
    closeSessionModal: () => dispatch(closeSessionModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

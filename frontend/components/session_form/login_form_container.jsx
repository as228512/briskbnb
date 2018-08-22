import React from "react";
import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, guestLogin } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

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
    otherForm: <a onClick={() => dispatch(openModal("signup"))}>Sign up</a>,
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);

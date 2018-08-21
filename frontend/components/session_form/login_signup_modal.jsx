import React from "react";
import { closeSessionModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";

function Modal(props) {
  if (!props.sessionModal) {
    return null;
  }

  let component;
  switch (props.sessionModal) {
    case "login":
      component = <LoginFormContainer />;
      break;

    case "signup":
      component = <SignupFormContainer />;
      break;

    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={props.closeSessionModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    sessionModal: state.ui.sessionModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSessionModal: () => dispatch(closeSessionModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

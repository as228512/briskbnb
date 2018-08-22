import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import ReviewFormContainer from "../reviews/review_form_container";

function Modal(props) {
  if (!props.modal) {
    return null;
  }

  //do we really need the break after each case? *****
  let component;
  switch (props.modal) {
    case "login":
      component = <LoginFormContainer />;
      break;

    case "signup":
      component = <SignupFormContainer />;
      break;

    case "review":
      component = <ReviewFormContainer />;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={props.closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);

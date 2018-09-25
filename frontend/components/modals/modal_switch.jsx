import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";

import LoginFormContainer from "../session_form/login_form_container";
import SignupFormContainer from "../session_form/signup_form_container";
import ReviewFormContainer from "../reviews/review_form_container";

const mapStateToProps = state => {
  let modal = state.ui.modal;

  if (modal instanceof Array) {
    //this is a review type modal
    return {
      modal: modal[0],
      homeId: modal[1],
      bookingId: modal[2],
      component: modal[3],
      requestType: modal[4],
      review: modal[5]
    };
  } else return { modal: modal };
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

// Modal component below
//
//
//
//
//
//
//
//

let component;
function Modal(props) {
  if (!props.modal) {
    return null;
  }

  let formName;

  switch (props.modal) {
    case "login":
      component = <LoginFormContainer />;
      formName = "session";
      break;

    case "signup":
      component = <SignupFormContainer />;
      formName = "session";
      break;

    case "review":
      component = (
        <ReviewFormContainer
          homeId={props.homeId}
          bookingId={props.bookingId}
          component={props.component}
          requestType={props.requestType}
          review={props.review}
        />
      );
      formName = "review";
      break;

    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={props.closeModal}>
      {renderForm(formName)}
    </div>
  );
}

function renderForm(formName) {
  if (formName === "session") {
    return (
      <div className="session-modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    );
  } else if (formName === "review") {
    return (
      <div className="review-modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    );
  }
}

import { connect } from "react-redux";
import {
  createBooking,
  resetBookingErrors
} from "../../actions/booking_actions";
import { openModal } from "../../actions/modal_actions";
import BookingDatePicker from "./bookings_datepicker";

const mapStateToProps = state => {
  const userId = state.session.id;
  const errors = state.errors.bookings;
  return {
    userId,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createBooking: booking => dispatch(createBooking(booking)),
    resetBookingErrors: () => dispatch(resetBookingErrors()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingDatePicker);

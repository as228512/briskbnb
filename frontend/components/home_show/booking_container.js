import { connect } from 'react-redux';
import { createBooking, resetBookingErrors } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';
import BookingDatePicker from './bookings_datepicker';


const mapStateToProps = (state) => {
  const users = state.entities.users;
  const currentUserStatus = Object.keys(users).length > 0
  const errors = state.errors.bookings

  return {
    currentUserStatus,
    errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    createBooking: booking => dispatch(createBooking(booking)),
    resetBookingErrors: () => dispatch(resetBookingErrors()),
    openModal: modal => dispatch(openModal(modal))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingDatePicker);

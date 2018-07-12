import { connect } from 'react-redux';
import { createBooking } from '../../actions/booking_actions';
import BookingDatePicker from './bookings_datepicker';

const mapDispatchToProps = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking))
});

export default connect(
  null,
  mapDispatchToProps
)(BookingDatePicker);

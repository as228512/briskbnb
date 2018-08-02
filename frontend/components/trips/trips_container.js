import { connect } from "react-redux";

import Trips from "./trips";
import { fetchTrips } from "../../actions/booking_actions";
import { fetchHomes } from "../../actions/home_actions";
import { asSortedArray } from "../../reducers/selectors";

const mapStateToProps = state => {
  const homes = asSortedArray(state.entities);
  const bookings = state.entities.bookings;

  return {
    homes,
    bookings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrips: () => dispatch(fetchTrips()),
  fetchHomes: bookingIds => dispatch(fetchHomes(bookingIds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);

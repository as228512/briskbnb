import { connect } from "react-redux";

import Trips from "./trips";
import { fetchTrips } from "../../actions/booking_actions";
import { fetchHomes, clearHomes } from "../../actions/home_actions";
import { asSortedArray } from "../../reducers/selectors";

const mapStateToProps = state => {
  const homes = asSortedArray(state.entities);
  const bookings = state.entities.bookings;
  debugger;
  return {
    homes,
    bookings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrips: () => dispatch(fetchTrips()),
  fetchHomes: bookingIds => dispatch(fetchHomes(bookingIds)),
  clearHomes: () => dispatch(clearHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);

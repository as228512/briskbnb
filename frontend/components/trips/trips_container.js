import { connect } from "react-redux";

import Trips from "./trips";
import { fetchTrips } from "../../actions/booking_actions";
import { fetchHomes, clearHomes } from "../../actions/home_actions";
import {
  sortedTripHomes,
  currentUsersBookings
} from "../../reducers/selectors";

const mapStateToProps = state => {
  const homes = sortedTripHomes(state);
  const bookings = currentUsersBookings(state);
  const indexLoading = state.ui.loadingState.indexLoading;
  return {
    homes,
    bookings,
    indexLoading
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

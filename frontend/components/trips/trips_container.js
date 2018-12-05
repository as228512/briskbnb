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
  const isLoadingAssets =
    state.ui.loadingState.indexLoading || state.ui.loadingState.homeLoading;
  return {
    homes,
    bookings,
    isLoadingAssets
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

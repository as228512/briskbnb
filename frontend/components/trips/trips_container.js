import { connect } from "react-redux";

import Trips from "./trips";
import { fetchTrips } from "../../actions/booking_actions";
import { fetchHomes, clearHomes } from "../../actions/home_actions";
import { asSortedArray } from "../../reducers/selectors";

//think about how you should be limiting reviews for a user based on # of bookings
//should bookings have a toggleable column of "reviewed"?

//then when rendering bookings, have logic >>> if(reviewed) don't render a review
//button, render their rating (the number, and later stars)

//if you do this, when you create a review, you need to dispatch and action after that
//to toggle that bookings reviewed column(in the review form, after createReview).
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
  fetchHomes: bookingIds => dispatch(fetchHomes(bookingIds)),
  clearHomes: () => dispatch(clearHomes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);

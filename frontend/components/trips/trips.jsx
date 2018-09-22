import React from "react";

import { NavBar } from "../nav/nav_bar";
import HomeIndex from "../homes/home_index";

class Trips extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrips().then(trips => {
      const tripHomeIds = [];

      Object.keys(trips.trips).forEach(key => {
        tripHomeIds.push(trips.trips[key]["home_id"]);
      });

      this.props.fetchHomes({ trips: tripHomeIds });
    });
  }

  componentWillUnmount() {
    this.props.clearHomes();
  }

  render() {
    const homes = this.props.homes;
    const bookings = this.props.bookings;

    return (
      <div>
        <NavBar />
        <h1 className="trips-heading">Upcoming Trips</h1>
        <HomeIndex homes={homes} bookings={bookings} upcomingTrip={true} />
        <br />
        <h1 className="trips-heading">Past Trips</h1>
        <HomeIndex homes={homes} bookings={bookings} upcomingTrip={false} />
      </div>
    );
  }
}

export default Trips;

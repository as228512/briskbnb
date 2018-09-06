import React from "react";

import { NavBar } from "../nav/nav_bar";
import HomeIndexContainer from "../homes/home_index_container";

class Trips extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTrips().then(trips => {
      this.props.fetchHomes(trips);
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
        <HomeIndexContainer
          homes={homes}
          bookings={bookings}
          upcomingTrip={true}
        />
        <br />
        <h1 className="trips-heading">Past Trips</h1>
        <HomeIndexContainer
          homes={homes}
          bookings={bookings}
          upcomingTrip={false}
        />
      </div>
    );
  }
}

export default Trips;

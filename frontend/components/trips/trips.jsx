import React from 'react';

import { NavBar } from '../nav/nav_bar';
import HomeIndex from '../homes/home_index';

class Trips extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    this.props
      .fetchTrips()
      .then(trips => {
        this.props.fetchHomes(trips)
      });
  }

  render() {
    const homes = this.props.homes;
    const bookings = this.props.bookings;

    return(
      <div>
        <NavBar/>
        <h1 className="trips-heading">Upcoming Trips</h1>
        <HomeIndex homes={homes} bookings={bookings} />

      </div>
    )
  }
}

export default Trips;

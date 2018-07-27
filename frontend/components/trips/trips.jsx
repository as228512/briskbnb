import React from 'react';

import { NavBar } from '../nav/nav_bar';

class Trips extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {

  }

  //feed >> title, price, home_url, bookedDrange

  render() {
    return(
      <div>
        <NavBar/>
        <h1 className="trips-heading">Upcoming Trips</h1>

      </div>
    )
  }
}

export default Trips;

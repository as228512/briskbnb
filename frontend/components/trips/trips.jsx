import React from 'react';

import { NavBar } from '../nav/nav_bar';
import HomeIndex from '../homes/home_index';

class Trips extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {

  }

  //feed >> title, price, home_url, bookedDrange

  render() {
    const homes = this.props.homes;
    return(
      <div>
        <NavBar/>
        <h1 className="trips-heading">Upcoming Trips</h1>
        <HomeIndex homes={homes} />

      </div>
    )
  }
}

export default Trips;

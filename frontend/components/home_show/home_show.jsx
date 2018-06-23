import React from 'react';
import { Link } from 'react-router-dom';

import HomeDetail from './home_detail';
import HomeMap from '../home_map/home_map';
import { NavBar } from '../nav/nav_bar';


const HomeShow = ({ home, homeId, fetchHome, fetchBookings }) => {

  return(
    <div>
      <NavBar />
      <div className="single-home-show">
        <div>
          <HomeDetail home={home} homeId={homeId}
            fetchHome={fetchHome} fetchBookings={fetchBookings} />
        </div>
      </div>
    </div>
  );
};

export default HomeShow;

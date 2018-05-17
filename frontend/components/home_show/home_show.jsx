import React from 'react';
import { Link } from 'react-router-dom';

import HomeDetail from './home_detail';
import HomeMap from '../home_map/home_map';

const HomeShow = ({ home, homeId, fetchHome }) => {
  const homes = {
    [homeId]: home
  };

  return(
    <div className="single-home-show">
      <div className="single-home-map">
        <HomeMap
          homes={homes}
          homeId={homeId}
          singleHome={true}
          fetchHome={fetchHome}
        />
      </div>
      <div>
        <HomeDetail home={home} />
      </div>
    </div>
  );
};

export default HomeShow;

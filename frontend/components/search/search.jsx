import React from 'react';

import HomeIndex from '../homes/home_index';
import HomeMap from '../home_map/home_map';


const Search = ({ homes, updateFilter }) => (
  <div className="home-index-body">
    <div>
      <HomeIndex key={homes.id} homes={homes} />
    </div>
    <div className="home-index-map">
      <HomeMap
        homes={homes}
        updateFilter={updateFilter}
        singleHome={false}
        />
    </div>
  </div>
);

export default Search;

import React from 'react';
import HomeIndex from '../homes/home_index';
import HomeMap from '../home_map/home_map';


const Search = ({ homes, updateFilter }) => (
  <div>
    <HomeMap
      key={homes.id}
      homes={homes}
      updateFilter={updateFilter}
      singleHome={false}
      />
  </div>
);

export default Search;

import React from 'react';
import HomeMap from '../home_map/home_map';


const Search = ({ homes, updateFilter }) => {
  return (
  <div>
    <HomeMap
      key={homes.id}
      homes={homes}
      updateFilter={updateFilter}
      />
  </div>
  );
};

export default Search;

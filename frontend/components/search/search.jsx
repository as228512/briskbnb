import React from 'react';
import HomeMap from '../home_map/home_map';

const Search = ({ homes, indexLoading, updateFilter }) => {
  return (
  <div>
    <HomeMap
      key={homes.id}
      indexLoading={indexLoading}
      homes={homes}
      updateFilter={updateFilter}
      />
  </div>
  );
};

export default Search;

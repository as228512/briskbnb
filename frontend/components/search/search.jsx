import React from 'react';
import HomeMap from '../home_map/home_map';


const Search = ({ homes, bounds, updateFilter }) => {
  let loading = { loading: true };
  if(bounds.northEast) loading = { loading: false };

  return (
  <div>
    <HomeMap
      key={homes.id}
      loadingState={loading}
      homes={homes}
      updateFilter={updateFilter}
      />
  </div>
  );
};

export default Search;

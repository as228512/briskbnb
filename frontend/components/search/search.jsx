import React from "react";
import HomeMap from "../home_map/home_map";

const Search = ({ homes, currentLoadingState, updateFilter, eraseHomes }) => {
  debugger;
  return (
    <div>
      <HomeMap
        key={homes.id}
        currentLoadingState={currentLoadingState}
        homes={homes}
        updateFilter={updateFilter}
        eraseHomes={eraseHomes}
      />
    </div>
  );
};

export default Search;

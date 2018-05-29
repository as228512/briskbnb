import React from 'react';
import { Route, Redirect, Switch, NavLink, HashRouter } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';




const greetingSearch = () => {
  return (
    <div>
      <div className="search-bar-container">
        <NavLink to="/homes" className="search-bar-link" placeholder="button">Search
        </NavLink>
      </div>
      <div>

        <Autocomplete
          className="search-bar"
          placeholder='    "Try Hokkaido"'
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          types={['(regions)']}/>
      </div>
    </div>

  );
};

export default greetingSearch;

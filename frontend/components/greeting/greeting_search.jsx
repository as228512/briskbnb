import React from 'react';
import { withRouter, Route, Redirect, Switch, NavLink, HashRouter } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';



class SearchBar extends React.Component {


  render() {
    return (
      <div>
        <Autocomplete
          className="search-bar"
          placeholder='"Try Hokkaido"'
          onPlaceSelected={(place) => {
            this.props.history.push({
              pathname: "/homes",
              place
            });
          }}
          types={['(regions)']}/>
      </div>

    );
  }
}

export default withRouter(SearchBar);

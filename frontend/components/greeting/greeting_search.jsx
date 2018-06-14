import React from 'react';
import { withRouter, Route, Redirect, Switch, NavLink, HashRouter } from 'react-router-dom';
import Autocomplete from 'react-google-autocomplete';



class SearchBar extends React.Component {

  handleKeyPress(event) {
    if(typeof event.target.value === "string" && event.keyCode === 13) {
      event.preventDefault();
      $(".search-bar").attr("placeholder", "Please select an option from the dropdown");
    }
  }

  render() {
    return (
      <div>
        <Autocomplete
          onKeyPress={this.handleKeyPress}
          className="search-bar"
          placeholder='"Try Hokkaido"'
          onPlaceSelected={(place) => {
            console.log(place);
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

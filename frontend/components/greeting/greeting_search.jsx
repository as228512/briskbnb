import React from "react";
import {
  withRouter,
  Route,
  Redirect,
  Switch,
  NavLink,
  HashRouter
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const splashInput = document.getElementsByClassName("splash-search-bar")[0];
    const navInput = document.getElementsByClassName("nav-search-bar")[0];
    const autocomplete = new google.maps.places.Autocomplete(
      splashInput || navInput
    );

    autocomplete.addListener("place_changed", () => {
      const formattedAddress = autocomplete.getPlace().formatted_address;
      const getFormattedAddress = autocomplete.getPlace().name;

      formattedAddress
        ? this.setState({ location: formattedAddress })
        : this.setState({ location: getFormattedAddress });

      this.handleSubmit();
    });
  }

  handleSubmit() {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.state.location }, (results, status) => {
      if (status === "OK") {
        const searched = results[0].address_components[0].long_name;
        const view1 = results[0].geometry.viewport.j.j;
        const view2 = results[0].geometry.viewport.j.l;
        const view3 = results[0].geometry.viewport.l.j;
        const view4 = results[0].geometry.viewport.l.l;

        this.props.history.push({
          pathname: "/homes",
          search: `?view1=${view1}&view2=${view2}
                  &view3=${view3}&view4=${view4}&searched=${searched}`
        });
      }
    });
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  chooseRandomLocation() {
    let briskDestinations = [
      '"Hokkaido"',
      '"Toronto"',
      '"Switzerland"',
      '"Greenland"',
      '"Alaska"'
    ];

    return briskDestinations[
      Math.floor(Math.random() * briskDestinations.length)
    ];
  }

  splashSearch() {
    if (this.props.location.pathname === "/") {
      return (
        <div className="splash-search-bar-container">
          <FontAwesomeIcon className="splash-search-icon" icon="search" />
          <input
            className="splash-search-bar"
            onChange={this.update("location")}
            placeholder={"Try " + this.chooseRandomLocation()}
            value={this.state.location}
          />
        </div>
      );
    }
  }

  navSearch() {
    if (this.props.location.pathname !== "/") {
      return (
        <div className="nav-search-bar-container">
          <FontAwesomeIcon className="nav-search-icon" icon="search" />
          <input
            className="nav-search-bar"
            onChange={this.update("location")}
            placeholder="Search"
            value={this.state.location}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.splashSearch()}
        {this.navSearch()}
      </div>
    );
  }
}

export default withRouter(SearchBar);

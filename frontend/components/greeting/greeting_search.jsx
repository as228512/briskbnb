import React from 'react';
import { withRouter, Route, Redirect, Switch, NavLink, HashRouter } from 'react-router-dom';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setLocation = this.setLocation.bind(this);
  }

  setLocation(location) {
    this.setState({ location: location });
  }

  componentDidMount() {
    const input = document.getElementsByClassName("search-bar")[0];
    const autocomplete = new google.maps.places.Autocomplete(input);

    google.maps.event.addDomListener(window, "load", autocomplete);
    let location;
    autocomplete.addListener("place_changed", () => {

      if (!autocomplete.getPlace().formatted_address) {
        location = autocomplete.getPlace().name;
        this.setState({
          location: location
        });
        this.handleSubmit();
      }

      else {
        location = autocomplete.getPlace().formatted_address;
        this.setState({
          location: location
        });
        this.handleSubmit();
      }
    });
  }



  handleSubmit(e) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.state.location }, (results, status) => {
      if (status === "OK") {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();

        this.props.history.push(`/homes?lat=${lat}&lng=${lng}`);
      }
    });

    if (e) {
      e.preventDefault();
    }
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  render() {

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>

        <input
          className="search-bar"
          onChange={this.update("location")}
          placeholder='"Try Hokkaido"'
          value={this.state.location}/>

        </form>
      </div>

    );
  }
}

export default withRouter(SearchBar);

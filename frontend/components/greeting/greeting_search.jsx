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
        const view1 = results[0].geometry.viewport.b.b;
        const view2 = results[0].geometry.viewport.b.f;
        const view3 = results[0].geometry.viewport.f.b;
        const view4 = results[0].geometry.viewport.f.f;

        this.props.history.push({
          pathname: "/homes",
          search:`?view1=${view1}&view2=${view2}
                  &view3=${view3}&view4=${view4}`
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

  render() {

    return (
      <div>
        <input
          className="search-bar"
          onChange={this.update("location")}
          placeholder='"Try Hokkaido"'
          value={this.state.location}/>
      </div>

    );
  }
}

export default withRouter(SearchBar);

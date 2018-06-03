import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import HomeIndex from '../homes/home_index';

class HomeMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    let coords;
    if (this.props.history.action === "POP") {
      coords = { lat: 40.754932, lng: -73.984016 };
    } else {
      coords = this.props.history.location.place.geometry.location;
    }

    this.map = new google.maps.Map(map, {
      center: coords,
      zoom: 8
    });

    this.MarkerManager =
      new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.singleHome) {
      this.props.fetchHome(this.props.homeId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }


  componentDidUpdate() {
    if (this.props.singleHome) {
      const targetHomeKey = Object.keys(this.props.homes)[0];
      const targetHome = this.props.homes[targetHomeKey];
      this.MarkerManager.updateMarkers([targetHome]);
    } else {
      this.MarkerManager.updateMarkers(this.props.homes);
    }
  }


  registerListeners() {

    google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west } };
          this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(home) {
    this.props.history.push(`/homes/${home.id}`);
  }

  render () {

    return (
    <div className="home-index-body">
      <div className="home-index-cntr">
        <HomeIndex key={this.props.homes.id} homes={this.props.homes}/>
      </div>

      <div className="home-index-map">
        <div className="map-container">
          <div className="map" id="map" ref="map">Map</div>
        </div>
      </div>

    </div>
    );
  }
}

export default withRouter(HomeMap);

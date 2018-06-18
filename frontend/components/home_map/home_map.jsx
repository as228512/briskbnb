import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';
import HomeIndex from '../homes/home_index';

class HomeMap extends React.Component {

  componentDidMount() {
    const map = this.refs.map;

    let coords = this.props.location.search;
    const search = new URLSearchParams(coords);
    const lat = search.get("lat");
    const lng = search.get("lng");
    const defaultCoords = { lat: 43.979128, lng: -74.431108 };
    coords = { lat: parseFloat(lat), lng: parseFloat(lng) };

    if (!coords.lat) {
      coords = defaultCoords;
    }

    this.map = new google.maps.Map(map, {
      center: coords,
      zoom: 7
    });


    this.MarkerManager =
      new MarkerManager(this.map, this.handleMarkerClick.bind(this));

      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentWillUnmount() {
    localStorage.clear();
  }


  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
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

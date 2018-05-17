import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: { lat: 42.857149, lng: 140.709702},
  zoom: 13
};


class HomeMap extends React.Component {

  componentDidMount() {
    const map = ReactDOM.findDOMNode(this.refs.map);

    this.map = new google.maps.Map(map, mapOptions);
    debugger
    this.MarkerManager =
      new MarkerManager(this.map, this.handleMarkerClick.bind(this));

    if (this.props.singleHome) {
      debugger
      this.props.fetchHome(this.props.homeId);
    } else {
      this.registerListeners();
      debugger
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
      const {north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, long: east },
        southWest: { lat: south, long: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }

  handleMarkerClick(home) {
    this.props.history.push(`/homes/${home.id}`);
  }




  render () {
    return (
      <div className="map" id="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(HomeMap);

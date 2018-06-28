import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';
import HomeIndex from '../homes/home_index';
import { NavBar } from '../nav/nav_bar';

class HomeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      loading: false,
      initalLoadingState: true
    };
  }

  componentDidMount() {
    const map = this.refs.map;
    const coords = this.props.location.search;
    const search = new URLSearchParams(coords);

    let bounds = new google.maps.LatLngBounds();
    bounds.b.b = parseFloat(search.get("view1"));
    bounds.b.f = parseFloat(search.get("view2"));
    bounds.f.b = parseFloat(search.get("view3"));
    bounds.f.f = parseFloat(search.get("view4"));


    if (!bounds.b.b) {
      const defaultCoords = { lat: 43.979128, lng: -74.431108 };
      this.map = new google.maps.Map(map, {
        center: defaultCoords,
        zoom: 7
      });
    }

    else {
      this.map = new google.maps.Map(map);
      this.map.fitBounds(bounds);
    }

    this.MarkerManager =
      new MarkerManager(this.map, this.handleMarkerClick.bind(this));

      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loading: this.props.indexLoading});
    if(this.props.indexLoading === true) this.setState({ initalLoadingState: false, loading: false });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentWillUnmount() {
    const bounds = {
      northEast: { lat: 0, lng: 0 },
      southWest: { lat: 0, lng: 0 } };

    this.props.updateFilter('bounds', bounds);
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

  homeMessage() {
    if((this.state.loading === false && this.props.homes.length === 0) &&
       (this.state.initalLoadingState === false)) {
      return (
        <div>
          <p className="home-results">No Results</p>
          <p className="no-homes">To get more results, try zooming out on the map</p>
          <div className="no-results-bottom-border"></div>
        </div>
      );
    }
  }

  loading() {
    if((this.state.loading === true || this.state.initalLoadingState === true) &&
        this.props.homes.length === 0)
        {
          return <div>Loading...</div>;
        }
  }

  render () {
    return (
    <div>
      <NavBar />
      <div className="home-index-body">
        <div className="home-index-cntr">
          {this.loading()}
          {this.homeMessage()}
          <HomeIndex key={this.props.homes.id} homes={this.props.homes}/>
        </div>

        <div className="home-index-map">
          <div className="map-container">
            <div className="map" id="map" ref="map">Map</div>
          </div>
        </div>

      </div>
    </div>
    );
  }
}

export default withRouter(HomeMap);

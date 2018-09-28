import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import ReactBodymovin from "react-bodymovin";
import animation from "../../../app/assets/animations/location_pin.json";

import MarkerManager from "../../util/marker_manager";
import HomeIndex from "../homes/home_index";
import { NavBar } from "../nav/nav_bar";
import { BottomNavBar } from "../nav/bottom_nav";
import { reviewStats } from "../../reducers/selectors";

class HomeMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialLoadingState: true
    };
  }

  componentDidMount() {
    this.indexSearch();
  }

  indexSearch() {
    this.setState({ initialLoadingState: true });
    const map = this.refs.map;
    const coords = this.props.location.search;
    const search = new URLSearchParams(coords);

    let bounds = new google.maps.LatLngBounds();
    bounds.b.b = parseFloat(search.get("view1"));
    bounds.b.f = parseFloat(search.get("view2"));
    bounds.f.b = parseFloat(search.get("view3"));
    bounds.f.f = parseFloat(search.get("view4"));

    //corrections for google smart search incase of Alaska or Greenland
    const searched = search.get("searched");
    const alaskaCoords = { lat: 59.670926419997, lng: -152.5 };
    const greenLandCoords = { lat: 55.6925, lng: -48.318 };

    if (!bounds.b.b) {
      const defaultCoords = { lat: 43.979128, lng: -74.431108 };
      this.map = new google.maps.Map(map, {
        center: defaultCoords,
        zoom: 7
      });
    } else if (searched === "Alaska") {
      this.map = new google.maps.Map(map, {
        center: alaskaCoords,
        zoom: 4
      });
    } else if (searched === "Greenland") {
      this.map = new google.maps.Map(map, {
        center: greenLandCoords,
        zoom: 4
      });
    } else {
      //google smartsearch inputs (autozoom based on fed coords)
      this.map = new google.maps.Map(map);
      this.map.fitBounds(bounds);
    }

    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.registerListeners();
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.indexSearch();
    }
    if (this.props.currentLoadingState === true)
      this.setState({ initialLoadingState: false });
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.homes);
  }

  componentWillUnmount() {
    this.props.eraseHomes();
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };
      this.props.updateFilter("bounds", bounds);
    });
  }

  handleMarkerClick(home) {
    this.props.history.push(`/homes/${home.id}`);
  }

  homeMessage() {
    const bodyMovinOptions = {
      loop: true,
      autoplay: true,
      prerender: true,
      animationData: animation
    };

    if (
      this.props.currentLoadingState === false &&
      this.state.initialLoadingState === false &&
      this.props.homes.length === 0
    ) {
      return (
        <div>
          <div className="no-results-cntr">
            <div className="no-results-text">
              <p className="no-homes-text-1">No Results</p>
              <p className="no-homes-text-2">
                To get more results, try zooming out on the map or searching a
                new location
              </p>
            </div>
            <div className="map-marker-animation">
              <ReactBodymovin options={bodyMovinOptions} />
            </div>
          </div>
          <div className="no-results-bottom-border" />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="home-index-body">
          <div className="home-index-cntr">
            {this.homeMessage()}
            <HomeIndex
              key={this.props.homes.id}
              homes={this.props.homes}
              reviewStats={reviewStats}
            />
          </div>

          <div className="home-index-map">
            <div className="map-container">
              <div className="map" id="map" ref="map">
                Map
              </div>
            </div>
          </div>
        </div>
        <BottomNavBar className="home-map-bottom-bar" />
      </div>
    );
  }
}

export default withRouter(HomeMap);

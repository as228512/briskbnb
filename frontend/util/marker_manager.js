class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(homes) {
    const homesObj = {};
    homes.forEach(home => (homesObj[home.id] = home));

    homes
      .filter(home => !this.markers[home.id])
      .forEach(newHome => this.createMarkerFromHome(newHome, this.handleClick));

    Object.keys(this.markers)
      .filter(homeId => !homesObj[homeId])
      .forEach(homeId => this.removeMarker(this.markers[homeId]));
  }

  // marker creation / deletion handled by updateMarkers,
  // which is called upon GMAPS interaction (componentDidUpdate)
  createMarkerFromHome(home) {
    const position = new google.maps.LatLng(home.lat, home.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      homeId: home.id,
      animation: google.maps.Animation.DROP
      //title: "something will appear if user hovers of marker"
    });

    marker.addListener("click", () => this.handleClick(home));
    this.markers[marker.homeId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.homeId].setMap(null);
    delete this.markers[marker.homeId];
  }
}

export default MarkerManager;

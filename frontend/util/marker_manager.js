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

    const homePrice = {
      boxShadow: "0 2px 3px 0 rgba(0, 0, 0, 0.07)",
      color: "484848",
      fontSize: "12px",
      fontWeight: "bold",
      text: `$${home.price}`
    };

    const customIcon = {
      path:
        "M 75 50 L 325 50 L 325 200 L 225 200 L 200 250 L 175 200 L 75 200 Z",
      anchor: new google.maps.Point(200, 240),
      labelOrigin: new google.maps.Point(200, 130),
      scale: 0.12,
      fillColor: "white",
      fillOpacity: 1,
      strokeColor: "rgba(0, 0, 0, 0.2)",
      strokeColor: "black",
      strokeWeight: 1
    };

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      homeId: home.id,
      icon: customIcon,
      label: homePrice
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

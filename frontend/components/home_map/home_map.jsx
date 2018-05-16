import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
// import MarkerManager from '../../util/marker_manager';


class HomeMap extends React.Component {


  render () {
    return (
      <div className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(HomeMap);

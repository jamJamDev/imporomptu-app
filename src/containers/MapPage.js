import React, { Component } from 'react';
import Map from '../components/Map';

class MapPage extends Component {
  render() {
    return (
      <div className="MapPage">
        <div className="MapPage-header">
          <h2>This is MAP CONTAINER</h2>
        </div>
        <p className="MapPage-intro">
          To get started, edit <code>src/containers/MapPage.js</code> and save to reload.
        </p>
          <Map />
      </div>
    );
  }
}

export default MapPage;

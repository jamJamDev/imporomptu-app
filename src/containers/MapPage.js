import React, { Component } from 'react';

class MapPage extends Component {
  render() {
    return (
      <div className="MapPage">
        <div className="MapPage-header">
          <img src={logo} className="MapPage-logo" alt="logo" />
          <h2>This is our main page</h2>
          <Button text="Click Me!" color="red"/>
          <Button text="Press Me!" color="blue"/>
          <Button text="Not Today!" color="green"/>
        </div>
        <p className="MapPage-intro">
          To get started, edit <code>src/containers/MapPage.js</code> and save to reload.
        </p>
        <div>
          <MapPage />
        </div>
      </div>
    );
  }
}

export default MapPage;

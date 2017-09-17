import React, { Component } from 'react';
import Map from '../components/Map';
import EventList from './EventList';

class MapPage extends Component {
  render() {
    return (
      <div className="MapPage">
          <Map />
          <EventList />
      </div>
    );
  }
}

export default MapPage;

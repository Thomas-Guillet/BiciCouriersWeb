import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation';
import MenuTools from '../components/menuTools/MenuTools';

class Map extends Component {
  render() {
    return (
      <div className="map">
        <MenuTools />
          map
        <MenuNavigation />
      </div>
    );
  }
}

export default Map;
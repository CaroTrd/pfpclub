import React, { Component } from 'react';
import './App.css';
import MapContainer from './components/map/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <MapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}
export default App;

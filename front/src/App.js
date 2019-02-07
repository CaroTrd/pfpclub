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
        <MapContainer />
      </div>
    );
  }
}
export default App;

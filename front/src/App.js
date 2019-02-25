import React, { Component } from 'react';
import PartnerList from './components/Partners/index';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <PartnerList />
      </div>
    );
  }
}

export default App;

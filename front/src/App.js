import React, { Component } from 'react';
import Members from './components/Members/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Members />
      </div>
    );
  }
}

export default App;

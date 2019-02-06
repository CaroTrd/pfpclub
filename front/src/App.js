import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Ambassadors from './components/ambassadeurs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <p> App</p>
        <BrowserRouter>
          <Route path="/ambassadors" component={Ambassadors} />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

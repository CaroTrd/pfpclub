import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter, Route, Switch, NavLink,
} from 'react-router-dom';
import Ambassadors from './components/ambassadeurs';
import Hobby from './components/ambassadeur/hobby';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <NavLink to="/hobby" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/ambassadors" component={Ambassadors} />
            <Route path="/ambassadors/:hobby_id" component={Hobby} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;

/* eslint-disable */


import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index';
import Home from './components/Home/index';
/* import Presentation from './components/Presentation/index';
import QuisommesNous from './components/Presentation/QuiSommesNous/index';
import ConseilAdministration from './components/Presentation/ConseilAdministration/index';
import Ambassadors from './components/Presentation/Ambassadors/Ambassadeurs/index'; */
import Inscription from './components/Members/index';
import Partners from './components/Partners/index';
/* import Events from './components/Events/index';
import Media from './components/Media/index';
import Contact from './components/Contact/index';
import Hobby from './components/Presentation/Ambassadors/Ambassadeur/hobby';
import PartnersList from './components/Partners/Partners/index'; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      /* eslint-disable */
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Home} />
              {/*<Route exact path="/presentation" component={Presentation} />
              <Route path="/qui-sommes-nous" component={QuisommesNous} />
              <Route path="/le-conseil-d'administration" component={ConseilAdministration} />
              <Route path="/ambassadeur" component={Ambassadors} />
              <Route path="/hobby/:hobby_name" component={Hobby} /> */}
              <Route path="/members" component={Inscription} />
              <Route path="/partners" component={Partners} />
              {/* <Route path="/events" component={Events} />
              <Route path="/media" component={Media} />
            <Route exact path="/contact" component={Contact} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

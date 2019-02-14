import React, { Component } from 'react';
import AmbassadeursList from '../Ambassadeurslist/index';
import Partners from '../../../Partners/Partnerslevel/index';

class Ambassadeurs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1> Les Ambassadeurs </h1>
        <p> Textes de presetation </p>
        <AmbassadeursList />
        <Partners />
      </div>
    );
  }
}

export default Ambassadeurs;

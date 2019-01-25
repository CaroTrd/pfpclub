import React, { Component } from 'react';
import AmbassadeursList from '../ambassadeurslist';

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
      </div>
    );
  }
}

export default Ambassadeurs;

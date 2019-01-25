import React, { Component } from 'react';
import Ambassadeur from '../ambassadeur/index';

class AmbassadeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p> Ambassadeurs list </p>
        <Ambassadeur />
      </div>
    );
  }
}

export default AmbassadeursList;

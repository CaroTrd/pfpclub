/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Ambassadeur from '../Ambassadeur/index';

class AmbassadeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ul className="ambassadors-ul">
          <Ambassadeur />
        </ul>
      </div>
    );
  }
}

export default AmbassadeursList;

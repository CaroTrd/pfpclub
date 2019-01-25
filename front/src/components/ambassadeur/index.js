import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Ambassadeur extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <ul>
          <li><img src="http://oog" alt="jiji" /></li>
          <li>
            <span>first name: </span>
          </li>
          <li> Last Name: </li>
          <li> Contact details: </li>
        </ul>
        <p> Text </p>
        <NavLink to="/about-this-ambassador"> More </NavLink>
      </div>
    );
  }
}

export default Ambassadeur;

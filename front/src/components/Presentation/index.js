/* eslint-disable max-len */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Le Club</h1>
        <div>
          <span className="node" />
        </div>
        <div className="contenant">
          <div className="pic corner corner--right">
            <img alt="pic" src="" />
          </div>
          <div className="par">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed eu metus libero. Sed eu volutpat dolor. Integer justo eros,
              tempor vitae leo ornare, varius dictum quam. Nam sed nisl turpis.
              Donec in consectetur dolor. Suspendisse pellentesque erat libero,
              a rutrum tortor interdum eget. Maecenas scelerisque eleifend erat
              eget ultricies. Aliquam bibendum mi in ligula commodo bibendum a
              interdum lacus. Aliquam fermentum risus eu venenatis sodales.
              Sed nec aliquam lacus, consectetur auctor mauris.
            </p>
          </div>
        </div>
        <div className="link">
          <NavLink to="/qui-sommes-nous"> Qui sommes-nous ? </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Presentation);

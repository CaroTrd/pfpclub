/* eslint-disable max-len */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import Partners from '../../Partners/Partnerslevel/index';
import pres2 from '../../../assets/images/pres-2.jpg';


class ConseilAdministration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="section--pres">
        <div className="container">
          <h1 className="title-h2 nodes nodes--color">Le conseil d&apos;administration</h1>
          <div className="contenant">
            <div className="pic corner corner--right">
              <img alt="pic" src={pres2} />
            </div>
            <div className="par">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu metus libero.
              Sed eu volutpat dolor. Integer justo eros, tempor vitae leo ornare, varius dictum quam.
              Nam sed nisl turpis. Donec in consectetur dolor. Suspendisse pellentesque erat libero,
              a rutrum tortor interdum eget. Maecenas scelerisque eleifend erat eget ultricies.
              Aliquam bibendum mi in ligula commodo bibendum a interdum lacus.
              Aliquam fermentum risus eu venenatis sodales. Sed nec aliquam lacus,
              consectetur auctor mauris.
              </p>
            </div>
          </div>
          <div className="link-host">
            <div className="precedent">
              <NavLink to="/qui-sommes-nous">Qui sommes-nous ?</NavLink>
            </div>
            <div className="link">
              <NavLink to="/ambassadeur"> Les ambassadeurs </NavLink>
            </div>
          </div>
        </div>
        <Partners />
      </div>
    );
  }
}

export default withRouter(ConseilAdministration);

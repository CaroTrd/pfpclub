/* eslint-disable max-len */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Partners from '../../Partners/Partnerslevel/index';
import logoNous from '../../../assets/images/logo-block.jpg';
import '../../../index.scss';

class QuiSommesNous extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="section--pres">
        <div className="container">
          <h1 className="title-h2 nodes nodes--color">Qui sommes-nous ?</h1>
          <div className="contenant">
            <div className="pic pic--nous corner corner--right">
              <img alt="pic" src={logoNous} />
            </div>
            <div className="par">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed eu metus libero. Sed eu volutpat dolor. Integer justo eros,
              tempor vitae leo ornare, varius dictum quam. Nam sed nisl turpis.
              Donec in consectetur dolor. Suspendisse pellentesque erat libero,
              a rutrum tortor interdum eget. Maecenas scelerisque eleifend era
              eget ultricies. Aliquam bibendum mi in ligula commodo bibendum a
              interdum lacus. Aliquam fermentum risus eu venenatis sodales.
              Sed nec aliquam lacus, consectetur auctor mauris.
              </p>
            </div>
          </div>
          <div className="link-host">
            <div className="precedent">
              <NavLink to="/presentation"> Le Club </NavLink>
            </div>
            <div className="link">
              <NavLink to="/le-conseil-d'administration">
                <p>Le conseil d&apos;administration</p>
              </NavLink>
            </div>
          </div>
        </div>
        <Partners />
      </div>
    );
  }
}

export default QuiSommesNous;

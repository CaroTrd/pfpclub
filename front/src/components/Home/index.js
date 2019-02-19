/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './index.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__elements">
            <img src="" alt="logo pfp club" />
            <h1 className="title-h1">pfp club</h1>
            <p>Ceci n&apos;est pas un club (comme les autres)</p>
          </div>
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel" />
            </div>
            <div>
              <span className="m_scroll_arrows unu" />
            </div>
            <p className="scroll-down">scroll down</p>
          </div>
        </div>
        <section className="section container">
          <h2 className="title-h2 center">Bienvenue au nouveau club de Belgique</h2>
          <div className="col-9 welcom__text">
            <p>
              Le PFP Club a comme objectif de fournir des services variés à ses membres par le
              biais d’actions d’intérêt économique et culturel.
            </p>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eu metus libero. Sed eu volutpat dolor.
              Integer justo eros, tempor vitae leo ornare, varius dictum quam. Nam sed
              nisl turpis. Donec in consectetur dolor. Suspendisse pellentesque erat
              libero, a rutrum tortor interdum eget. Maecenas scelerisque eleifend erat
              eget ultricies. Aliquam bibendum mi in ligula commodo bibendum a interdum
              lacus. Aliquam fermentum risus eu venenatis sodales. Sed nec aliquam lacus,
              consectetur auctor mauris.
            </p>
            <div className="welcom__images">
              <div className="corner corner--right">
                <img src="http://via.placeholder.com/272x221" alt="" />
              </div>
              <div className="corner corner--right">
                <img src="http://via.placeholder.com/272x221" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

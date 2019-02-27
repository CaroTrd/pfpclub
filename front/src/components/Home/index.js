/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './index.scss';
import '../../assets/styles/typo.scss';
import Text from './Text/index';
import NewMember from './NewMembers/index';
import Partners from '../Partners/Partnerslevel/index';

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
        <Text />
        <NewMember />
        <Partners pageName="home" />
      </div>
    );
  }
}

export default Home;

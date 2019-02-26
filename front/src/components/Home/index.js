/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './index.scss';
import '../../assets/styles/typo.scss';
import Text from './Text/index';
import NewMember from './NewMembers/index';
// import Partners from '../Partners/Partnerslevel/index';

class Home extends Component {
  render() {
    return (
      <div>
        <Text />
        <NewMember />
        {/* <Partners pageName="home" /> */}
      </div>
    );
  }
}

export default Home;

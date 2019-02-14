import React, { Component } from 'react';
import SelectCategory from './SelectCategory/index';
import UserType from './UserType/index';
import PartnersList from './PartnersList/index';
import './index.css';

class PartnersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="partners_container">
        <h1 className="partners-title">Partners Page</h1>
        <div className="partners_filter">
          <SelectCategory />
          <UserType />
        </div>
        <PartnersList />
      </div>
    );
  }
}

export default PartnersPage;

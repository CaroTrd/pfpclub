import React, { Component } from 'react';
import Partners from './Partnerslevel/index';
import SelectCategory from './SelectCategory/index';
import UserType from './UserType/index';
import PartnersList from './PartnersList/index';
import './index.scss';
import '../../assets/styles/typo.scss';

class PartnersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="partners__container">
          <div className="container">
            <div className="partners__intro">
              <h1 className="title-h2">Partners Page</h1>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed eu metus libero. Sed eu volutpat dolor. Integer
                justo eros, tempor vitae leo ornare, varius dictum quam.
                Nam sed nisl turpis. Donec in consectetur dolor. Suspendisse
                pellentesque erat libero, a rutrum tortor interdum eget.
                Maecenas scelerisque eleifend erat eget ultricies. Aliquam
                bibendum mi in ligula commodo bibendum a interdum lacus.
                Aliquam fermentum risus eu venenatis sodales. Sed nec
                aliquam lacus, consectetur auctor mauris.
              </p>
            </div>
          </div>
          <div className="partners_filter">
            <div className="container">
              <div className="partners__filter__flex">
                <SelectCategory />
                <UserType />
              </div>
            </div>
          </div>
          <PartnersList />
        </div>
        <Partners />
      </div>
    );
  }
}

export default PartnersPage;

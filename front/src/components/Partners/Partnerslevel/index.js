/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchPartners } from '../../Redux/Actions/index';
import './stylePartners.scss';

class PartnersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partnersList: [],
      show: 0,
    };
  }

  componentDidMount() {
    fetch('/api/partners/partners-level')
      .then(response => response.json())
      .then((data) => {
        this.setState({ partnersList: data });
        this.props.fetchPartners(data);
      });
  }

  render() {
    const bronze = this.state.partnersList
      .filter(partnerBronze => (partnerBronze.partnership_type === 1))
      .slice(0, this.state.show).map(elemBronze => (
        <li key={elemBronze.partner_id}>
          <div className="item">
            <img alt="pic" src={elemBronze.logo} className="logo-1" />
          </div>
        </li>
      ));
    const silver = this.state.partnersList
      .filter(partnerSilver => (partnerSilver.partnership_type === 2))
      .slice(0, this.state.show).map(elemSilver => (
        <li key={elemSilver.partner_id}>
          <div className="item">
            <img alt="pic" src={elemSilver.logo} className="logo-2" />
          </div>
        </li>
      ));
    const gold = this.state.partnersList
      .filter(partnerGold => (partnerGold.partnership_type === 3))
      .slice(0, this.state.show).map(elemGold => (
        <li key={elemGold.partner_id}>
          <div className="item">
            <img alt="pic" src={elemGold.logo} className="logo-3" />
          </div>
        </li>
      ));
    const platinium = this.state.partnersList
      .filter(partnerPlatinium => (partnerPlatinium.partnership_type === 4))
      .slice(0, 6).map(elemPlatinium => (
        <li className="border-transparent" key={elemPlatinium.partner_id}>
          <div className="item">
            <img alt="pic" src={elemPlatinium.logo} className="logo-4" />
          </div>
        </li>
      ));
    return (
      <div className="header-partnerslevel">
        <div className="partners_container">
          <h3 className="title___level">PARTENAIRES PLATINIUM</h3>
          <ul className="list--logo">
            {platinium}
            {this.props.pageName === 'home'
              && (
                <Fragment>
                  {gold}
                  {silver}
                  {bronze}
                </Fragment>
              )
            }
          </ul>
        </div>
        <footer className="line">
          <ul className="footer">
            <li>
              <a href="#" className="liens">
                <p>MENTIONS LEGALES</p>
              </a>
            </li>
            <li>
              <a href="#" className="liens">
                <p>DISCLAIMER</p>
              </a>
            </li>
            <li>
              <a href="#" className="lien">
                <p>© 2019 PFP CLUB .</p>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPartners }, dispatch);

const PartnersG = withRouter(PartnersList);

export default connect(null, mapDispatchToProps)(PartnersG);

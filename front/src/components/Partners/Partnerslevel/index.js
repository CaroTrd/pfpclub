/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { fetchPartners } from '../../Redux/Actions/index';
import '../index.css';

class PartnersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partnersList: [],
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
      .filter(partnerBronze => (partnerBronze.partnership_type === 1)).map(elemBronze => (
        <li key={elemBronze.partner_id}>
          <div className="item">
            <img alt="pic" src={elemBronze.logo} />
            <h4>{elemBronze.name}</h4>
          </div>
        </li>
      ));
    const silver = this.state.partnersList
      .filter(partnerSilver => (partnerSilver.partnership_type === 2)).map(elemSilver => (
        <li key={elemSilver.partner_id}>
          <div className="item">
            <img alt="pic" src={elemSilver.logo} />
            <h4>{elemSilver.name}</h4>
          </div>
        </li>
      ));
    const gold = this.state.partnersList
      .filter(partnerGold => (partnerGold.partnership_type === 3)).map(elemGold => (
        <li key={elemGold.partner_id}>
          <div className="item">
            <img alt="pic" src={elemGold.logo} />
            <h4>{elemGold.name}</h4>
          </div>
        </li>
      ));
    const platinium = this.state.partnersList
      .filter(partnerPlatinium => (partnerPlatinium.partnership_type === 4)).map(elemPlatinium => (
        <li key={elemPlatinium.partner_id}>
          <div className="item">
            <h4>{elemPlatinium.name}</h4>
            <img alt="pic" src={elemPlatinium.logo} />
          </div>
        </li>
      ));
    return (
      <ul>
        <li>
          <h2>Platinium</h2>
          <ul>
            {platinium}
          </ul>
        </li>
        {this.props.pageName === 'home'
          && (
            <Fragment>
              <li>
                <h2>Gold</h2>
                <ul>
                  {gold}
                </ul>
              </li>
              <li>
                <h2>Silver</h2>
                <ul>
                  {silver}
                </ul>
              </li>

              <li>
                <h2>Bronze</h2>
                <ul>
                  {bronze}
                </ul>
              </li>
            </Fragment>
          )
        }
      </ul>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchPartners }, dispatch);

const PartnersG = withRouter(PartnersList);

export default connect(null, mapDispatchToProps)(PartnersG);

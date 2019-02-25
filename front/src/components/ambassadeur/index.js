/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAmbassador, envoiId } from '../../actions/index';
import '../../assets/styles/typo.scss';
import './index.css';

class Ambassadeur extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    if (this.props.ambassadors.length === 0) {
      this.props.getAmbassador();
    }
  }

  render() {
    const ambassadorsItem = [...this.props.ambassadors].reverse().map(elem => (
      <div key={elem.hobby_id} className="ambassador-div">
        <li className="ambassadors-ul-li">
          <img className="ambassador-picture" src={elem.pictures} alt="pictures of administator" />
          <div className="ambassador-infoList" align="left">
            <p className="members-info">
              {elem.first_name}
            </p>
            <p className="members-info">
              {elem.last_name}
            </p>
            <p className="members-info">
              {elem.phone}
            </p>
            <p className="members-info">
              {elem.email}
            </p>
          </div>
          <div>
            <NavLink to={`/ambassadors/${elem.hobby_id}`}> See more </NavLink>
          </div>
        </li>
      </div>
    ));

    return (
      <div>
        <ul className="ambassadors-ul">
          {ambassadorsItem}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    ambassadors: state.refreshReducer,
  }
);

const mapDispatchToProps = dispatch => bindActionCreators({ getAmbassador, envoiId }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Ambassadeur);

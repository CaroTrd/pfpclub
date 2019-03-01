/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAmbassador, envoiId } from '../Redux/Actions';
import '../../assets/styles/typo.scss';
import './index.scss';

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
        <div className="">
          <p className="title-h2 level-name level-name-amba">{elem.hobby_name}</p>
          <li className="ambassadors-ul-li">
            <div className="ambassador-ulC">
              <div className="ambassador-li__container__img">
                <span className="helper" />
                <img className="ambassador-picture" src={elem.pictures} alt="pictures of administator" />
              </div>
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
            </div>
            <div className="text-ambassador">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatDuis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                Excepteur sint occaecat cupidatat non proidentsuntn culpa qui officia deserunt
              </p>
              <NavLink to={`/ambassadors/${elem.hobby_id}`}> See more </NavLink>
            </div>
          </li>
        </div>
      </div>
    ));

    return (
      <div className="">
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

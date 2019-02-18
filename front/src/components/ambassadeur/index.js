/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAmbassador, envoiId } from '../../actions/index';

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
      <div key={elem.hobby_id}>
        <li>
          <h2>
            {elem.hobby_name}
          </h2>
          <p>
            {elem.first_name}
          </p>
          <p>
            {elem.last_name}
          </p>
          <p>
            {elem.phone}
          </p>
          <p>
            {elem.email}
          </p>
          <div>
            <NavLink to={`/ambassadors/${elem.hobby_id}`}> See more </NavLink>
          </div>
        </li>
      </div>
    ));

    return (
      <div>
        <ul>
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

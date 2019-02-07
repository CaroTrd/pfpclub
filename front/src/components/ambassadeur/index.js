/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { NavLink /* , withRouter */ } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ambassadorsReducers from '../../actions/index';

class Ambassadeur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ambassadors: [],
    };
  }

  componentDidMount() {
    fetch('/ambassadors')
      .then(response => response.json())
      .then((data) => {
        this.setState(
          {
            ambassadors: data.results,
          },
        );
      });
  }

  componentDidUpdate() {
    this.props.ambassadorsReducers(this.state.ambassadors);
  }

  render() {
    const ambassadorsItem = this.state.ambassadors.map(elem => (
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
          <NavLink to={`/hobby/${elem.hobby_name}`}> See more </NavLink>
        </div>
      </li>
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

const mapDispatchToProps = dispatch => bindActionCreators({ ambassadorsReducers }, dispatch);

// const ambassadors = withRouter(Ambassadeur);

export default connect(null, mapDispatchToProps)(Ambassadeur);

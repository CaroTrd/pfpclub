/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveAmbassadors, envoiId } from '../../actions/index';

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
    this.props.saveAmbassadors(this.state.ambassadors.reverse());
  }

  render() {
    const ambassadorsItem = this.state.ambassadors.map(elem => (
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

const mapDispatchToProps = dispatch => bindActionCreators({ saveAmbassadors, envoiId }, dispatch);

export default connect(null, mapDispatchToProps)(Ambassadeur);

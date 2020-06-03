/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { getAmbassador } from '../Redux/Actions';

class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.hobby_id - 1,
    };
    if (this.props.hobby.length === 0) {
      this.props.getAmbassador();
    }
  }

  render() {
    const hobby = [...this.props.hobby].reverse()[this.state.id];
    return (
      <div>
        <div>
          <NavLink to="/ambassadors/"> Ambassadors </NavLink>
        </div>
        {this.props.hobby.length > 0
        && (
          <ul>
            <li>
              <h1>
                {hobby.hobby_name}
              </h1>
            </li>
            <li>
              <p>
                {hobby.first_name}
              </p>
            </li>
            <li>
              <p>
                {hobby.last_name}
              </p>
            </li>
            <li>
              <p>
                {hobby.phone}
              </p>
            </li>
            <li>
              <p>
                {hobby.email}
              </p>
            </li>
          </ul>
        )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hobby: state.refreshReducer,
});
const mapDispatchToProps = dispatch => bindActionCreators({ getAmbassador }, dispatch);

const hobbies = withRouter(Hobby);
export default connect(mapStateToProps, mapDispatchToProps)(hobbies);

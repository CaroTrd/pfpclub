/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';


/*
const hobbySelected = hobbySelectedName =>({
}) */


class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <h1>
              {this.props.hobby[this.props.match.params.hobby_id - 1].hobby_name}
            </h1>
          </li>
          <li>
            <p>
              {this.props.hobby[this.props.match.params.hobby_id - 1].first_name}
            </p>
          </li>
          <li>
            <p>
              {this.props.hobby[this.props.match.params.hobby_id - 1].last_name}
            </p>
          </li>
          <li>
            <p>
              {this.props.hobby[this.props.match.params.hobby_id - 1].phone}
            </p>
          </li>
          <li>
            <p>
              {this.props.hobby[this.props.match.params.hobby_id - 1].email}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hobby: state.ambassadorsReducers,
});


export default connect(mapStateToProps)(Hobby);

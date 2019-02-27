/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log('ici', this.hobby);
  }

  render() {
    return (
      <div>
        <p>
          {' '}
          {this.props.hobby}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ hobby: state.hobby_name });

export default connect(mapStateToProps)(Hobby);

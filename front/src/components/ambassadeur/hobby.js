/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>
          {this.props.hobby_name}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });

export default connect(mapStateToProps)(Hobby);

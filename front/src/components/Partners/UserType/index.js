import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savedSearchAction } from '../../Redux/Actions/index';

class PartnersSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: '',
    };
  }

  componentDidUpdate() {
    this.props.savedSearchAction(this.state.userValue);
  }

  render() {
    return (
      <div className="search-container">
        <div>
          <input onChange={e => this.setState({ userValue: e.target.value })} className="search" type="text" placeholder="Search.." />
        </div>
      </div>
    );
  }
}

/* eslint-disable*/
const mapStateToProps = (state) => {
  return {
    userValue: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ savedSearchAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnersSearchBar);
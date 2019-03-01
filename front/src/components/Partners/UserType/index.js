import React, { Component } from 'react';
import './index.scss';
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
      <span className="search-logo">
        <input onChange={e => this.setState({ userValue: e.target.value })} className="input-partners" type="text" placeholder="Recherche" />
      </span>
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
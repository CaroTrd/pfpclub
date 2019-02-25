/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Ambassadeur from '../ambassadeur/index';
import { getAmbassador } from '../../actions/index';


class AmbassadeursList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const categoryName = [...this.props.ambassadors].reverse().map(elem => (
      <div key={elem.hobby_id}>
        <h2 className="title-h2 ambassador-category-position">
          {elem.hobby_name}
        </h2>
      </div>
    ));
    return (
      <div>
        <ul className="ambassadors-ul">
          {categoryName}
          <Ambassadeur />
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

const mapDispatchToProps = dispatch => bindActionCreators({ getAmbassador }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AmbassadeursList);

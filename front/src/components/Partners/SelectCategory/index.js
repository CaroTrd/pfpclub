import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { savedCategoryAction } from '../../Redux/Actions/index';


class selectCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
    };
  }


  componentDidMount() {
    fetch('/api/partners/test')
      .then(response => response.json())
      .then((data) => {
        this.setState({ elements: data });
      });
  }

  componentDidUpdate() {
    this.props.savedCategoryAction(this.state.category);
  }

  render() {
    const info = this.state.elements.map(test => (
      <option className="select__option" value={test.categrory_name} key={test.category_id}>{test.category_name}</option>
    ));
    return (
      <select onChange={e => this.setState({ category: e.target.value })} className="input-partners" name="cars" id="mySlect">
        <option className="select__option" value="all">Catégories</option>
        {info}
      </select>
    );
  }
}
/* eslint-disable*/
const mapStateToProps = (state) => {
  return {
    category: state.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ savedCategoryAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(selectCategory);
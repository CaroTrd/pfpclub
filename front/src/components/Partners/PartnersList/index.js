import React, { Component } from 'react';
import { connect } from 'react-redux';
import PartnersElements from './PartnersElements/index';
import './index.css';

class partnersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      filterList: [],
    };
  }

  componentDidMount() {
    fetch('/api/partners/partners')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          elements: data,
          filterList: data,
        });
      });
    this.handleChange();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.handleChange();
    }
  }
  /* eslint-disable*/
  handleChange() {
    const value = this.props.search.toLowerCase();
    const newlist = this.state.elements.filter((elem) => {
      if (value !== 'uservalue') {
        return elem.name.toLowerCase().includes(value);
      }
      return elem;
    });
    this.setState({
      filterList: newlist,
    });
  }


  render() {
    const partnersElementsPlatinium = this.state.filterList.filter((task) => {
      return task.type === 'Platinium' &&
        (task.category_name === this.props.category
          || this.props.category === undefined
          || this.props.category === 'all')
    }).map((element, index) => {
      return <PartnersElements key={index} data={element} />
    });

    const partnersElementsGold = this.state.filterList.filter((task) => {
      return task.type === 'Gold' &&
        (task.category_name === this.props.category
          || this.props.category === undefined
          || this.props.category === 'all')
    }).map((element, index) => {
      return <PartnersElements key={index} data={element} />
    });

    const partnersElementsSilver = this.state.filterList.filter((task) => {
      return task.type === 'Silver' &&
        (task.category_name === this.props.category
          || this.props.category === undefined
          || this.props.category === 'all')
    }).map((element, index) => {
      return <PartnersElements key={index} data={element} />
    });

    const partnersElementsBronze = this.state.filterList.filter((task) => {
      return task.type === 'Bronze' &&
        (task.category_name === this.props.category
          || this.props.category === undefined
          || this.props.category === 'all')
    }).map((element, index) => {
      return <PartnersElements key={index} data={element} />
    });


    return (
      <div className="">
        <ul className="partners-ul partners-ul--platinium ">
          <span>Platinium</span>
          {partnersElementsPlatinium}
        </ul>
        <ul className="partners-ul partners-ul--gold">
          <span>Gold</span>
          {partnersElementsGold}
        </ul>
        <ul className="partners-ul partners-ul--silver">
          <span>Sivler</span>
          {partnersElementsSilver}
        </ul>
        <ul className="partners-ul partners-ul--bronze">
          <span>Bronze</span>
          {partnersElementsBronze}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = (state) => {

  return {
    category: state.categoryReducers.category,
    search: state.searchReducers.userValue,
  };
};

export default connect(mapStateToProps)(partnersList);

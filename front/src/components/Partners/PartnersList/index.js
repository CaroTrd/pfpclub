import React, { Component } from 'react';
import { connect } from 'react-redux';
import PartnersElements from './PartnersElements/index';
import '../../../assets/styles/typo.scss';
import './index.scss';

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
      <React.Fragment>
        <section className="container section__partners__list">
          <div className="partners__platinium partners__list__container ">
            <ul className="partners-ul">
              <h2 className="title-h2 level-name">Platinium</h2>
              {partnersElementsPlatinium}
            </ul>
          </div>
          <div className="partners__gold partners__list__container">
            <ul className="partners-ul">
              <h2 className="title-h2 level-name">Gold</h2>
              {partnersElementsGold}
            </ul>
          </div>
          <div className="partners__silver partners__list__container">
            <ul className="partners-ul">
              <h2 className="title-h2 level-name">Silver</h2>
              {partnersElementsSilver}
            </ul>
          </div>
          <div className="partners__bronze partners__list__container">
            <ul className="partners-ul">
              <h2 className="title-h2 level-name">Bronze</h2>
              {partnersElementsBronze}
            </ul>
          </div>
        </section>
      </React.Fragment>
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

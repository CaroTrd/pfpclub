import React, { Component } from 'react';
import './index.scss';

class Partners extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <li className="partners-li">
        <div className="partners-li__container">
          <div className="partners-li__container__img">
            <span className="helper" />
            <img className="partners-img" src={this.props.data.logo} alt={this.props.data.name} />
          </div>
          <div className="partners-li_container_text">
            <h3 className="title-partners">{this.props.data.name}</h3>
            <span className="category_name">{this.props.data.category_name}</span>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </li>
    );
  }
}
export default Partners;

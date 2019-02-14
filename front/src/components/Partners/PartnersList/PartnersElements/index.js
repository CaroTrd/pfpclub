import React, { Component } from 'react';
import './index.css';

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
            <img className="partners-img" src={this.props.data.logo} alt={this.props.data.name} />
          </div>
          <div className="partners-li_container_text">
            <h3 className="title-partners">{this.props.data.name}</h3>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </li>
    );
  }
}
export default Partners;
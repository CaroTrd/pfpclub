import React, { Component } from 'react';
import Map from './Map/index';
import ContactForm from './ContactForm/index';
import Partners from '../Partners/Partnerslevel/index';
import './index.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleSubmit = (values) => {
    fetch('/api/contact/message',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(values),
      })
      .then(
        (res) => {
          if (res.status === 200) {
            this.setState({ mess: 'Votre question a bien éte envoyée.', isOpen: !false });
          }
          if (res.status === 500) {
            this.setState({ mess: 'Nous avons rencontré un problème.', isOpen: !false });
          }
        },
      );
    this.setState({
      isOpen: !false,
    });
  }

  handleClick() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <div className={this.state.isOpen ? 'popup' : ' close'}>
          <h1 className="welcome">{this.state.mess}</h1>
          <div className="flex-container">
            <button type="button" className="closewindow" onClick={() => this.handleClick()}>Fermer</button>
          </div>
        </div>
        <Map />
        <ContactForm onSubmit={this.handleSubmit} />
        <Partners />
      </div>

    );
  }
}

export default Contact;

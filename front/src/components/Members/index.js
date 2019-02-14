/* eslint-disable camelcase */
import React, { Component } from 'react';
import PersonalForm from './Inscription/personal';
import Partners from '../Partners/Partnerslevel/index';
import './index.css';


class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isOpen: false,
    };
  }

  handleSubmit = (values) => {
    const {
      firstname, lastname, birthdate, email, phone, address,
      city, municipality, zipcode, country, name, manager, vatnumbr,
      e_mail, phone_comp, address_comp, city_comp, zipcode_comp, country_comp,
      municipality_comp, website,
    } = values;
    const personal = {
      firstname, lastname, birthdate, email, phone, address, city, municipality, zipcode, country,
    };
    const professional = {
      name,
      manager,
      vatnumbr,
      e_mail,
      phone_comp,
      address_comp,
      city_comp,
      zipcode_comp,
      country_comp,
      municipality_comp,
      website,
    };
    fetch('/api/members/inscription/personal',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(personal),
      })
      .then(
        (res) => {
          if (res.status === 200) {
            this.setState({ message: 'Votre demande a bien éte enregitré.', isOpen: !false });
          }
          if (res.status === 500) {
            this.setState({ message: 'Nous avons rencontré un problème lors de la sauvegarde.', isOpen: !false });
          }
        },
      );
    if (typeof professional.name === 'undefined' && typeof professional.vatnumbr === 'undefined') {
      // eslint-disable-next-line no-console
      console.log('');
    } else {
      fetch('/api/members/inscription/professional',
        {
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify(professional),
        })
        .then(
          (res) => {
            if (res.status === 200) {
              this.setState({ message: 'Votre demande a bien éte enregitrée.', isOpen: !false });
            }
            if (res.status === 500) {
              this.setState({ message: 'Nous avons rencontré un problème lors de la sauvegarde.', isOpen: !false });
            }
          },
        );
      this.setState({
        isOpen: !false,
      });
    }
  }

  handleClick() {
    this.setState({
      isOpen: false,
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <PersonalForm onSubmit={this.handleSubmit} />
        <div className={this.state.isOpen ? 'popup' : ' close'}>
          <h1 className="welcome">Ta demande d inscription</h1>
          <div className="flex-container">
            <p className="message"><strong>{this.state.message}</strong></p>
            <button type="button" className="closewindow" onClick={() => this.handleClick()}>Fermer</button>
          </div>
        </div>
        <Partners />
      </div>
    );
  }
}

export default SubmitForm;

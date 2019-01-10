import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Validation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inscrit: '',
      formulaire: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:4000/api/formulaire/information/${this.props.match.params.ID}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          formulaire: data,
        });
      });
  }

  handleChange(event) {
    this.setState({
      inscrit: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inscrit === '1') {
      fetch('http://localhost:4000/api/formulaire/demandes/validation', {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json; charset=utf-8',
        },
        body: JSON.stringify({ inscrit: this.state.inscrit, id: this.props.match.params.ID })
      })
        .then((res) => { console.log(res) })
        .catch(err => console.error(err));
      return alert(`Le client a été ajouté.`);
    } else {
      return alert(`Le client n'a pas été ajouté.`);
    }
  }

  render() {
    const info = this.state.formulaire.map((elem, index) =>
      <div key={index}>
        <li>Nom {elem.NOM}</li>
        <li>Prénom {elem.PRENOM}</li>
        <li>Nationalité {elem.NATIONALITE}</li>
        <li>Date de naissance {elem.DATENAISSANCE}</li>
        <li>Etat civil {elem.ETATCIVIL}</li>
        <li>Email {elem.EMAIL}</li>
        <li>Adresse {elem.ADRESS}</li>
        <li>GSM {elem.GSM}</li>
      </div>);
    return (
      <div>
        <ul>{info}</ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Accepter
            <input type="radio" value="1" checked={this.state.inscrit === '1'} onChange={this.handleChange} />
            Refuser
            <input type="radio" value="0" checked={this.state.inscrit === '0'} onChange={this.handleChange} />
          </label>
          <button type="submit" className="submit-button">Soumettre</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Validation);
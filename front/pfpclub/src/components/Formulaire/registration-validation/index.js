import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';


class Demandes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: '',
      formulaires: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/formulaire/demandes')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          formulaires: data.data,
        });
      });
  }

  handleChange(event) {
    this.setState({
      choice: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const elements = this.state.formulaires.map((elem, index) => <div key={index}>
      <li>Nom: {elem.NOM}</li>
      <li>Prénom {elem.PRENOM}</li>
      <li>
        <NavLink to={`/Formulaire/demandes/information/${elem.ID}`}>
          <button type="view" className="view_all">View all</button>
        </NavLink>
      </li>
    </div>);
    return (
      <div>
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default withRouter(Demandes);
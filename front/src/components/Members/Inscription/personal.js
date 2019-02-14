/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../Redux/SimpleForm/index';
import validate from './Validation/index';
import ProfessionalForm from './professional';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  loadMore() {
    this.setState({ visible: true });
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div>
          <h2>PFP Club</h2>
          <p>Ceci n est pas un Club (comme les autres)</p>
          <h2>Bulletin d adhésion au PFP Club</h2>
          <p>A renvoyer uniquement par e-mail à info@pfpclub.be</p>
          <p>
            Le soussigné souhaite être admis en qualité de membre adhérent du PFP Club
            et s engage à respecter les règles et status du Club et à s acquitter de la cotisation
            de EUR 49,95 pour l année 2019 sur le compte PFP Club BE36 3631 7885 2781 ainsi que du
            droit d entrée de EUR 99,95 (gratuit si inscription en 2018)
          </p>
          <h2>Coordonnées privées</h2>
        </div>

        <div>
          <label htmlFor="">
            <span>Prénom</span>
            <Field component={renderField} type="text" name="firstname" label="first_name" placeholder="ex: Philippe" />

            <span>Nom</span>
            <Field component={renderField} type="text" name="lastname" label="last_name" placeholder="ex: Lion" />
            <span>Date de naissance</span>
            <Field component={renderField} type="date" min="1920-01-01" max="2000-12-31" name="birthdate" label="birthdate" />
            <span>E-mail</span>
            <Field component={renderField} type="email" name="email" label="email" placeholder="ex: philippe-lion@hotmail.com" />
            <span>GSM</span>
            <Field component={renderField} type="tel" name="phone" label="phone" placeholder="ex: 0482910393" />
            <span>Adresse</span>
            <Field component={renderField} type="text" name="address" label="address" placeholder="ex: 150 rue Cathérine" />
            <span>Ville</span>
            <Field component={renderField} type="text" name="city" label="city" placeholder="ex: Bruxelles" />
            <span>Commune</span>
            <Field component={renderField} type="text" name="municipality" label="municipality" placeholder="ex: Bruxelles" />
            <span>Code postale</span>
            <Field component={renderField} type="text" name="zipcode" label="zipcode" placeholder="ex: 1000" />
            <span>Pays</span>
            <Field component={renderField} type="text" name="country" label="country" placeholder="ex: Belgique" />
          </label>
        </div>
        {this.state.visible ? <ProfessionalForm />
          : <button onClick={() => this.loadMore()} type="button" className="cta load">Souhaitez-vous rajouter votre société ?</button>
        }
        <button type="submit" value="soumettre" className="inscription">S'inscrire</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'simple',
  validate,
})(PersonalForm);

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../Redux/SimpleForm/index';
import validate from './Validation/index';

const ProfessionalForm = () => (
  <div>
    <h2>Coordonnées professionnelles</h2>
    <label htmlFor="">
      <span>Nom société</span>
      <Field component={renderField} type="text" name="name" label="name" placeholder="ex: WPW" />
      <span>Position</span>
      <Field component={renderField} type="text" name="manager" label="manager" placeholder="ex: Luc Smeets" />
      <span>TVA</span>
      <Field component={renderField} type="text" name="vatnumbr" label="vat_numbr" placeholder="ex: BE 0000000009" />
      <span>E-mail société</span>
      <Field component={renderField} type="e_mail" name="e_mail" label="e_mail" placeholder="ex: wpw@gwp.be" />
      <span>Téléphone société</span>
      <Field component={renderField} type="text" name="phone_comp" label="phone_comp" placeholder="ex: 023758355" />
      <span>Adresse</span>
      <Field component={renderField} type="text" name="address_comp" label="address_comp" placeholder="150 rue de Naples" />
      <span>Ville</span>
      <Field component={renderField} type="text" name="city_comp" label="city_comp" placeholder="ex: Anvers" />
      <span>Commune</span>
      <Field component={renderField} type="text" name="municipality_comp" label="municipality_comp" placeholder="ex: Anvers" />
      <span>Code postale</span>
      <Field component={renderField} type="text" name="zipcode_comp" label="zip_code_comp" placeholder="ex: 2370" />
      <span>Pays</span>
      <Field component={renderField} type="text" name="country_comp" label="country_comp" placeholder="ex: Belgique" />
      <span>Site web</span>
      <Field component={renderField} type="text" name="website" label="website" placeholder="ex: www.wpw.be" />
    </label>
  </div>
);
export default reduxForm({
  form: 'simple',
  validate,
})(ProfessionalForm);

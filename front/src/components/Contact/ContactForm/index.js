/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../Redux/SimpleForm/index';
import validate from '../../Members/Inscription/Validation/index';

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <label htmlFor="">
        <span>Nom</span>
        <Field component={renderField} type="text" name="namecontact" label="name_contact" placeholder="ex: Alex Lion" />
        <span>GSM</span>
        <Field component={renderField} type="tel" name="phonecontact" label="phone_contact" placeholder="ex: 0482910393" />
        <span>E-mail</span>
        <Field component={renderField} type="email" name="emailcontact" label="email_contact" placeholder="ex: philippe-lion@hotmail.com" />
        <span>Objet</span>
        <Field component={renderField} type="text" name="subjectcontact" label="subject_contact" placeholder="ex: Question" />
        <span>Message</span>
        <Field component={renderField} type="textarea" name="message" label="Message" placeholder="Ma question" />
      </label>
      <button type="submit" value="soumettre">Envoyer</button>
    </form>
  );
};

export default reduxForm({
  form: 'simple',
  validate,
})(ContactForm);

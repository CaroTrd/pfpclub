/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../Redux/SimpleForm/index';
import validate from '../../Members/Inscription/Validation/index';
import '../index.css';

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="title-h2 nodes nodes--color">Contact</h1>
        <div className="container-contact">
          <label htmlFor="">
            <div className="contact__element">
              <span>Nom:</span>
              <Field component={renderField} type="text" name="namecontact" label="name_contact" placeholder="ex: Alex Lion" />
            </div>
            <div className="contact__element">
              <span>GSM:</span>
              <Field component={renderField} type="tel" name="phonecontact" label="phone_contact" placeholder="ex: 0482910393" />
            </div>
            <div className="contact__element">
              <span>E-mail:</span>
              <Field component={renderField} type="email" name="emailcontact" label="email_contact" placeholder="ex: philippe-lion@hotmail.com" />
            </div>
            <div className="contact__element">
              <span>Objet:</span>
              <Field component={renderField} type="text" name="subjectcontact" label="subject_contact" placeholder="ex: Question" />
            </div>
            <div className="contact__element">
              <span>Message:</span>
              <Field component={renderField} type="textarea" name="message" label="Message" placeholder="Ma question" />
            </div>
          </label>
          <button className="contact-button" type="submit" value="soumettre">Envoyer</button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'simple',
  validate,
})(ContactForm);

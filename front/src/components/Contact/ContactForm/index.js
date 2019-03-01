/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../Redux/SimpleForm/index';
import validate from '../../Members/Inscription/Validation/index';
import logoContact from './contact.png';
import '../index.scss';

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="container container-contact">
      <form onSubmit={handleSubmit}>
        <h2 className="title-h2 nodes nodes--color">NOUS SOMMES LA POUR VOUS</h2>
        <div className="contact__element">
          <p className="contact-form col-9 contact-para">
            N&apos;hésitez pas à nous contacter pour toute demande
            d&apos;informations complémentaires ou pour proposer un partenariat.
          </p>
        </div>
        <div id="contact-container-form">
          <div className="wimg cor cor--right">
            <img alt="wimg" className="wimg" src={logoContact} />
          </div>
          <div className="container-contact">
            <label className="contact-label" htmlFor="">
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
          </div>
        </div>
        <button className="contact-button" type="submit" value="soumettre"><span className="style-button-text">Envoyer</span></button>
      </form>
      <div className="person-infos-contact">
        <ul className="infor-data">
          <li>
            <h3>Adresse</h3>
            <p className="contact-form">
              Rue Fritz Toussaint 55/A5
              1050 Brussels - Belgique
            </p>
          </li>
          <li>
            <h3>Heures</h3>
            <p className="contact-form">
              Lundi - Vendredi 9:00 - 18h00
            </p>
          </li>
          <li>
            <h3>Email</h3>
            <p className="contact-form">
              info@pfpclub.be
            </p>
          </li>
          <li>
            <h3>Phone</h3>
            <p className="contact-form">
              +32 2 613 16 22
            </p>
          </li>
          <li>
            <h3>Fax</h3>
            <p className="contact-form">
              +32 2 613 16 24
            </p>
          </li>
          {/* <li>
            <h3>Personnes de contact</h3>
            <ul>
              <li>
                <span className="contact-form">
                  Thaddé Plater-Zyberk
                  tpz@pfpclub.be
                </span>
              </li>
              <li>
                <span className="contact-form">
                  Quentin de Valensart
                  quentin@pfpclub.be
                </span>
              </li>
              <li>
                <span className="contact-form">
                  Pablo Lopez-Herrerias
                  pablo@pfpclub.be
                </span>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'simple',
  validate,
})(ContactForm);

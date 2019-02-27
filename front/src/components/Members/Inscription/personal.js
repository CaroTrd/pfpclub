/* eslint-disable no-plusplus */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../Redux/SimpleForm/index';
import validate from './Validation/index';

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dd: [],
      jj: '',
      mm: '',
      yy: [],
      year: '',
      err: 'Veuillez renseigner les informations demandées',
    };
  }

  populateDays() {
    const month = this.state.mm;
    const years = this.state.year;
    let day = this.state.dd;
    let jour = '';

    while (day.firstChild) {
      day.removeChild(day.firstChild);
    }
    if (month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') {
      let firstDay = 1;
      jour = 31;
      const totalDays = [];
      for (firstDay; firstDay <= jour; firstDay++) {
        totalDays.push(firstDay);
      }
      this.setState({ dd: totalDays });
    } else if (month === '04' || month === '06' || month === '09' || month === '11') {
      let firstDay = 1;
      jour = 30;
      const totalDays = [];
      for (firstDay; firstDay <= jour; firstDay++) {
        totalDays.push(firstDay);
      }
      this.setState({ dd: totalDays });
    } else {
      // Si le mois est février, on calcule si l'année est bissextile
      const leap = (years % 4 === 0 && years % 100 !== 0) || years % 400 === 0;
      day = leap ? jour = 29 : jour = 28;
      let firstDay = 1;
      const totalDays = [];
      for (firstDay; firstDay <= jour; firstDay++) {
        totalDays.push(firstDay);
      }
      this.setState({ dd: totalDays });
      let firstYear = 1920;
      const lastYear = 2000;
      const totalYears = [];
      for (firstYear; firstYear <= lastYear; firstYear++) {
        totalYears.push(firstYear);
      }
      this.setState({ yy: totalYears });
    }
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} id="Questionnaire">
        <div className="container-formulaire">
          <h2 className="title-h2 titre-section">Formulaire d&apos;inscription au PFP Club.</h2>
          <div className="bowtie">
            <span className="node" />
          </div>
          <div className="description">
            <p className="text form">
              Merci de nous avoir envoyé le formulaire dûment rempli.
              Une fois votre candidature évaluée par notre Comité,
              vous recevrez une confirmation avec une demande de paiement
              pour une année - 12 mois - (EUR 100). Ce montant est payable annuellement.
              Des droits d&apos;entrée au Club uniques (EUR 125) sont aussi à payer au moment
              de l&apos;acceptation de votre candidature. Le paiement peut-être fait par une
              société ou personne physique. Compte PFP Club: BE36 3631 7885 2781.
              Ces prix sont d&apos;application du 1 Janvier 2019 au 31 Décembre 2019.
            </p>
          </div>
        </div>
        <div className="formulary">
          <label htmlFor="">
            <ul className="fields">
              <li>
                <p className="typo">
                  Prénom et nom
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="firstname" label="first_name" placeholder="Prénom" className="field1" /></li>
              <li><Field component={renderField} type="text" name="lastname" label="last_name" placeholder="Nom" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Date de naissance
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li>
                <Field component="select" id="day" name="day" className="field-select" onClick={() => this.populateDays()} onChange={(e) => { this.setState({ jj: e.target.value }); }}>
                  <option>Jour</option>
                  {this.state.dd.map(elemDay => (
                    <option key={elemDay} value={elemDay}>{elemDay}</option>
                  ))
                  }
                </Field>
                <span className={!/^(^[0-3]{0,1})([0-9]{1}){0,1}$/.test(this.state.jj) ? 'error__message' : 'correct'}>{this.state.err}</span>
              </li>
              <li>
                <Field component="select" id="month" name="month" className="field-select" onChange={(e) => { this.setState({ mm: e.target.value }); }}>
                  <option>Mois</option>
                  <option value="01">Janvier</option>
                  <option value="02">Février</option>
                  <option value="03">Mars</option>
                  <option value="04">Avril</option>
                  <option value="05">Mai</option>
                  <option value="06">Juin</option>
                  <option value="07">Juillet</option>
                  <option value="08">Août</option>
                  <option value="09">Septembre</option>
                  <option value="10">Octobre</option>
                  <option value="11">Novembre</option>
                  <option value="12">Décembre</option>
                </Field>
                <span className={!/^(^[0-1]{0,1})([0-9]{1}){0,1}$/.test(this.state.mm) ? 'error__message' : 'correct'}>{this.state.err}</span>
              </li>
              <li>
                <Field component="select" id="year" name="year" className="field-select" onClick={() => this.populateDays()} onChange={(e) => { this.setState({ year: e.target.value }); }}>
                  <option>Année</option>
                  {this.state.yy.map(elemYear => (
                    <option key={elemYear} value={elemYear}>{elemYear}</option>
                  ))
                  }
                </Field>
                <span className={!/^((^[0-2]{0,1})([09]{1})([02-9]{1})(\d{1})){0,1}$/.test(this.state.year) ? 'error__message' : 'correct'}>{this.state.err}</span>
              </li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  E-mail privé
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="email" name="email" label="email" placeholder="ex:myname@example.com" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Téléphone privé
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="code" name="code" label="code" placeholder="Code" className="field4" /></li>
              <li><Field component={renderField} type="tel" name="phone" label="phone" placeholder="Numéro" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Adresse privée
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="street" label="street" placeholder="Rue" className="field1" /></li>
              <li><Field component={renderField} type="text" name="number" label="number" placeholder="n°" className="field4" /></li>
              <li><Field component={renderField} type="text" name="city" label="city" placeholder="Ville" className="field4" /></li>
              <li><Field component={renderField} type="text" name="municipality" label="municipality" placeholder="Commune" className="field2" /></li>
              <li><Field component={renderField} type="text" name="zipcode" label="zipcode" placeholder="Code postal" className="field3" /></li>
              <li><Field component={renderField} type="text" name="country" label="country" placeholder="Pays" className="field4" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Nom société
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="legal_form" label="legal_form" placeholder="Forme juridique" className="field1" /></li>
              <li><Field component={renderField} type="text" name="name_comp" label="name_comp" placeholder="Nom" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Position
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="position" label="position" placeholder="" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  TVA
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="vatcode" label="vat_code" placeholder="BE" className="field5" /></li>
              <li><Field component={renderField} type="text" name="vatnumbr" label="vat_numbr" placeholder="Numéro" className="field0" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  E-mail société
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="e_mail" name="e_mail" label="e_mail" placeholder="ex:myname@example.com" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Téléphone société
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="phone_code" label="phone_code" placeholder="Code" className="field4" /></li>
              <li><Field component={renderField} type="text" name="phone_comp" label="phone_comp" placeholder="Numéro" className="field1" /></li>
            </ul>
            <ul className="fields">
              <li>
                <p className="typo">
                  Adresse société
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li><Field component={renderField} type="text" name="street_comp" label="street_comp" placeholder="Rue" className="field1" /></li>
              <li><Field component={renderField} type="text" name="number_comp" label="number_comp" placeholder="n°" className="field4" /></li>
              <li><Field component={renderField} type="text" name="city_comp" label="city_comp" placeholder="Ville" className="field4" /></li>
              <li><Field component={renderField} type="text" name="municipality_comp" label="municipality_comp" placeholder="Commune" className="field2" /></li>
              <li><Field component={renderField} type="text" name="zipcode_comp" label="zip_code_comp" placeholder="Code postal" className="field3" /></li>
            </ul>
            <ul className="field__question">
              <li>
                <p className="inquest">
                  Comment avez-vous su que le PFP existe?
                  {' '}
                  <span className="important">*</span>
                  :
                </p>
              </li>
              <li>
                <div>
                  <ul className="field__question">
                    <li className="checked">
                      <Field component={renderField} type="checkbox" name="facebook" label="facebook" className="check" />
                    </li>
                    <li><p className="option__form">Facebook</p></li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <ul className="field__question">
                    <li className="checked">
                      <Field component={renderField} type="checkbox" name="friend" label="friend" className="check" />
                    </li>
                    <li><p className="option__form">Un(e) ami(e)</p></li>
                  </ul>
                </div>
              </li>
              <li>
                <div>
                  <ul className="field__question">
                    <li className="checked">
                      <Field component={renderField} type="checkbox" name="other" label="other" className="check" />
                    </li>
                    <li><p className="option__form">Autre</p></li>
                  </ul>
                </div>
              </li>
            </ul>
          </label>
        </div>
        <h2 className="title-h2 soustitle">Règles PFP</h2>
        <div className="bowtie">
          <span className="node" />
        </div>
        <ul className="rules">
          <li>
            <p className="conditions">
              Acceptation des règles
              <span className="important">*</span>
            </p>
          </li>
          <li>
            <div>
              <ul className="list__law">
                <li>
                  <Field component={renderField} type="checkbox" name="rules" label="rules" className="check" />
                </li>
                <li>
                  <p className="conditions">
                    J'ai pris connaissance et accepte les règles du PFP Club.
                  </p>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <p className="conditions">Acceptation de l'utilisation des données privées *</p>
          </li>
          <li>
            <div>
              <ul className="list__law">
                <li>
                  <Field component={renderField} type="checkbox" name="private_data" label="private_data" className="check" />
                </li>
                <li>
                  <p className="conditions">
                    J’accepte que mes données personnelles soient traitées à des
                    fins de marketing direct et pour recevoir les offres promotionnelles
                    des partenaires du PFP Club
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="final-answer">
          <ul className="instruction">
            <li>
              <span className="inform-person">
                Le temps de réponse pour une demande d'application ne dépasse pas la semaine.
              </span>
            </li>
            <li>
              <span className="inform-person">
                Le Comité se réunit une fois par semaine afin d'étudier les candidatures.
              </span>
            </li>
            <li>
              <span className="inform-person">
                Merci!
              </span>
            </li>
          </ul>
        </div>
        <div className="button--inscription">
          <button type="submit" value="soumettre" className="styleButton"><span className="styleText">JE VALIDE</span></button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'simple',
  validate,
})(PersonalForm);

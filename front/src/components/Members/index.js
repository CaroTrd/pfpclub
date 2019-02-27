/* eslint-disable camelcase */
import React, { Component } from 'react';
import PersonalForm from './Inscription/personal';
// import Partners from '../Partners/Partnerslevel/index';
import '../../assets/styles/typo.scss';
import './index.scss';


class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isOpen: false,
      visible: false,
    };
  }

  handleSubmit = (values) => {
    const {
      name_comp, vatcode, vatnumbr,
    } = values;
    const vtnmbr = `${vatcode} ${vatnumbr}`;
    fetch('/api/members/inscription/personal',
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
            this.setState({ message: 'Votre demande a bien éte enregitrée.', isOpen: !false });
          }
          if (res.status === 500) {
            this.setState({ message: 'Nous avons rencontré un problème lors de la sauvegarde.', isOpen: !false });
          }
        },
      );

    if (typeof name_comp !== 'undefined' && typeof vtnmbr !== 'undefined') {
      fetch('/api/members/inscription/professional',
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
              this.setState({ message: 'Votre demande a bien éte enregitrée.', isOpen: !false });
            }
            if (res.status === 500) {
              this.setState({ message: 'Nous avons rencontré un problème lors de la sauvegarde.', isOpen: !false });
            }
          },
        );
    }
    this.setState({
      isOpen: !false,
    });
  }

  /* loadMore() {
    if (this.state.visible === false) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: false });
    }
  } */

  handleClick() {
    this.setState({
      isOpen: false,
    });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="space">
        <div className="container_members">
          <h2 className="title-h2 titre-section">DEVENIR MEMBRE</h2>
          <div className="bowtie">
            <span className="node" />
          </div>
          <div className="description">
            <p className="text form">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu metus libero. Sed
              eu volutpat dolor. Integer justo eros, tempor vitae leo ornare, varius dictum quam.
              Nam sed nisl turpis. Donec in consectetur dolor. Suspendisse pellentesque erat libero,
              a rutrum tortor interdum eget. Maecenas scelerisque eleifend erat eget ultricies.
              Aliquam bibendum mi in ligula commodo bibendum a interdum lacus.
              Aliquam fermentum risus eu venenatis sodales. Sed nec aliquam lacus,
              consectetur auctor mauris.
            </p>
            <div className="button--inscription">
              <a href="#Questionnaire">
                <button type="button" value={this.state.visible} className="styleButton" href="#title">
                  <span className="styleText">JE DEVIENS MEMBRE</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <section id="advantages">
          <div className="container_members">
            <h2 className="title-h2 avantage">AVANTAGES DU CLUB</h2>
            <div className="row">
              <div className="text card">

                <div className="avantages__text">
                  <div className="bowtie">
                    <span className="node" />
                  </div>
                  <p>
                    Bénéficier d’une carte de membre qui donne accès à des
                    réductions et prix préférentiels dans différents magasins,
                    restaurants, bars et sociétés partenaires
                  </p>
                </div>
              </div>
              <div className="text card">
                <div className="text">
                  <div className="avantages__text">
                    <div className="bowtie">
                      <span className="node" />
                    </div>
                    <p>
                      Recevoir des invitations pour participer aux évènements PFP
                      Club
                    </p>
                  </div>
                </div>
              </div>
              <div className="text card">
                <div className="avantages__text">
                  <div className="bowtie">
                    <span className="node" />
                  </div>
                  <p>
                    Avoir accès à un site web restreint où seront postés des infos
                    pratiques ainsi que des rubriques spécifiques par les
                    prestataires PFP conseillés par les différents membres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container_members">
          {/* {this.state.visible ? : ''
          } */}
          <PersonalForm onSubmit={this.handleSubmit} id="Questionnaire" />
          <div className={this.state.isOpen ? 'popup' : ' close'}>
            <div className="flex-container">
              <p className="message"><strong>{this.state.message}</strong></p>
              <button type="button" className="closewindow" onClick={() => this.handleClick()}>Fermer</button>
            </div>
          </div>
        </div>
        {/* <Partners /> */}
      </div>
    );
  }
}

export default SubmitForm;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';
import '../../../assets/styles/typo.scss';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section id="avantages">
          <h2 className="title-h2 style_texte">AVANTAGES DU CLUB</h2>
          <div className="bowtie">
            <span className="node" />
          </div>
          <div className="container">
            <div className="row">
              <div className="carte cards">
                <div className="number">1</div>
                <div>
                  <p className="list-advantages">
                    Bénéficier d’une carte de membre qui donne accès à des
                    réductions et prix préférentiels dans différents magasins,
                    restaurants, bars et sociétés partenaires
                  </p>
                </div>
              </div>
              <div className="wrapper cards">
                <div className="carte">
                  <div className="number">2</div>
                  <div>
                    <p className="list-advantages">
                      Recevoir des invitations pour participer aux évènements
                      PFP Club
                    </p>
                  </div>
                </div>
                <div className="apply">
                  <Link to="/members#Questionnaire" className="title-h2">
                    JE DEVIENS MEMBRE
                  </Link>
                </div>
              </div>
              <div className="carte cards">
                <div className="number">3</div>
                <div>
                  <p className="list-advantages">
                    Avoir accès à un site web restreint où seront postés des
                    infos pratiques ainsi que des rubriques spécifiques par les
                    prestataires PFP conseillés par les différents membres
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Text;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';
import welcom1 from '../../../assets/images/welcom-1.jpg';
import welcom2 from '../../../assets/images/welcom-2.jpg';
import LogoAbsolute from '../../../assets/images/logo-grey.svg';
import '../../../assets/styles/typo.scss';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <section className="section section--bienvenue container">
          <h2 className="title-h2 nodes nodes--color center">Bienvenue au nouveau club de Belgique</h2>
          <img className="logo-absolute" src={LogoAbsolute} alt="" />
          <div className="col-9 welcom__text">
            <p>
              Le PFP Club a comme objectif de fournir des services variés à ses membres par le
              biais d’actions d’intérêt économique et culturel.
            </p>
            <p>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed eu metus libero. Sed eu volutpat dolor.
              Integer justo eros, tempor vitae leo ornare, varius dictum quam. Nam sed
              nisl turpis. Donec in consectetur dolor. Suspendisse pellentesque erat
              libero, a rutrum tortor interdum eget. Maecenas scelerisque eleifend erat
              eget ultricies. Aliquam bibendum mi in ligula commodo bibendum a interdum
              lacus. Aliquam fermentum risus eu venenatis sodales. Sed nec aliquam lacus,
              consectetur auctor mauris.
            </p>
          </div>
          <div className=" col-9 welcom__images">
            <div className="corner corner--right welcom--corner">
              <img src={welcom2} alt="" />
            </div>
            <div className="corner corner--right welcom--corner">
              <img src={welcom1} alt="" />
            </div>
          </div>
        </section>
        <section id="avantages">
          <h2 className="title-h2 style_texte nodes nodes--white">Avantages du club</h2>
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

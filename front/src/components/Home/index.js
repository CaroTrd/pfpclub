/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import '../../assets/styles/typo.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header__elements">
            <img src="" alt="logo pfp club" />
            <h1 className="title-h1">pfp club</h1>
            <p>Ceci n&apos;est pas un club (comme les autres)</p>
          </div>
        </div>
        <div className="container">
          <h1 className="titre">Accueil</h1>
          <p className="paragraphe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
            condimentum tellus. Etiam dolor purus, condimentum quis volutpat at,
            placerat et dui. Proin tellus tellus, ornare non sodales volutpat,
            feugiat a urna. Etiam at luctus ante, eu pellentesque mauris. Nam
            pharetra neque ac arcu ullamcorper, id lacinia sem aliquam. Aenean
            aliquam enim at nibh venenatis lacinia. Maecenas vulputate faucibus
            est, vel maximus enim lobortis quis. Sed scelerisque augue facilisis
            lorem facilisis sollicitudin. Fusce hendrerit elit augue, nec
            elementum nunc scelerisque eget. Ut condimentum dolor quam, in
            dignissim tortor molestie in. In in dignissim odio, id feugiat
            metus. Vivamus hendrerit congue augue sit amet scelerisque. Aenean
            pretium cursus sem et cursus. Duis at purus quis dui porta laoreet.
            Sed pharetra dignissim placerat. Duis euismod odio vitae dictum
            congue. Pellentesque in elementum nulla. Sed rhoncus molestie metus,
            vitae dignissim est rutrum et. Praesent in neque ac turpis aliquet
            pharetra in sit amet odio. Maecenas bibendum tellus a nulla
            sollicitudin, et sollicitudin ipsum hendrerit. Sed facilisis tempus
            efficitur. Donec id dolor nec nisl bibendum ornare. Vestibulum eu
            dolor neque. Vivamus et lectus a odio rhoncus gravida. Aenean sit
            amet gravida leo. Mauris hendrerit mauris mi, nec auctor nibh
            ultrices eu. Cras efficitur libero sit amet porttitor ullamcorper.
            Duis vel enim volutpat, blandit turpis nec, pellentesque mauris.
            Nunc lobortis feugiat tellus vitae venenatis. Vivamus diam tellus,
            ullamcorper nec lorem in, sollicitudin placerat eros. Curabitur
            placerat consectetur eros a blandit. Morbi efficitur rhoncus elit eu
            blandit. Mauris eget nisi neque. Sed fermentum fermentum elit, sit
            amet varius augue vulputate ut. Duis accumsan, nulla eget placerat
            scelerisque, elit lorem malesuada ligula, quis eleifend tortor leo
            eget quam. Phasellus fringilla lectus vel ipsum ornare, vel
            hendrerit quam interdum. Proin dapibus ligula rutrum sapien
            molestie, quis bibendum quam sodales. Donec nunc elit, luctus id
            malesuada nec, viverra sit amet elit. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nunc iaculis arcu nec elit mollis,
            dictum facilisis tellus pharetra. Phasellus vel mauris ac turpis
            vulputate gravida maximus in orci. Duis porta turpis justo.
            Vestibulum nec tempus elit.
          </p>
          <p className="paragraphe">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in
            condimentum tellus. Etiam dolor purus, condimentum quis volutpat at,
            placerat et dui. Proin tellus tellus, ornare non sodales volutpat,
            feugiat a urna. Etiam at luctus ante, eu pellentesque mauris. Nam
            pharetra neque ac arcu ullamcorper, id lacinia sem aliquam. Aenean
            aliquam enim at nibh venenatis lacinia. Maecenas vulputate faucibus
            est, vel maximus enim lobortis quis. Sed scelerisque augue facilisis
            lorem facilisis sollicitudin. Fusce hendrerit elit augue, nec
            elementum nunc scelerisque eget. Ut condimentum dolor quam, in
            dignissim tortor molestie in. In in dignissim odio, id feugiat
            metus. Vivamus hendrerit congue augue sit amet scelerisque. Aenean
            pretium cursus sem et cursus. Duis at purus quis dui porta laoreet.
            Sed pharetra dignissim placerat. Duis euismod odio vitae dictum
            congue. Pellentesque in elementum nulla. Sed rhoncus molestie metus,
            vitae dignissim est rutrum et. Praesent in neque ac turpis aliquet
            pharetra in sit amet odio. Maecenas bibendum tellus a nulla
            sollicitudin, et sollicitudin ipsum hendrerit. Sed facilisis tempus
            efficitur. Donec id dolor nec nisl bibendum ornare. Vestibulum eu
            dolor neque. Vivamus et lectus a odio rhoncus gravida. Aenean sit
            amet gravida leo. Mauris hendrerit mauris mi, nec auctor nibh
            ultrices eu. Cras efficitur libero sit amet porttitor ullamcorper.
            Duis vel enim volutpat, blandit turpis nec, pellentesque mauris.
            Nunc lobortis feugiat tellus vitae venenatis. Vivamus diam tellus,
            ullamcorper nec lorem in, sollicitudin placerat eros. Curabitur
            placerat consectetur eros a blandit. Morbi efficitur rhoncus elit eu
            blandit. Mauris eget nisi neque. Sed fermentum fermentum elit, sit
            amet varius augue vulputate ut. Duis accumsan, nulla eget placerat
            scelerisque, elit lorem malesuada ligula, quis eleifend tortor leo
            eget quam. Phasellus fringilla lectus vel ipsum ornare, vel
            hendrerit quam interdum. Proin dapibus ligula rutrum sapien
            molestie, quis bibendum quam sodales. Donec nunc elit, luctus id
            malesuada nec, viverra sit amet elit. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nunc iaculis arcu nec elit mollis,
            dictum facilisis tellus pharetra. Phasellus vel mauris ac turpis
            vulputate gravida maximus in orci. Duis porta turpis justo.
            Vestibulum nec tempus elit.
          </p>
        </div>
        <section id="avantages">
          <h2 className="title-h2">AVANTAGES DU CLUB</h2>
          <div className="bowtie">
            <span className="node" />
          </div>
          <div className="container">
            <div className="row">
              <div className="text card">
                <div className="number">1</div>
                <div>
                  <p>
                    Bénéficier d’une carte de membre qui donne accès à des
                    réductions et prix préférentiels dans différents magasins,
                    restaurants, bars et sociétés partenaires
                  </p>
                </div>
              </div>
              <div className="wrapper card">
                <div className="text">
                  <div className="number">2</div>
                  <div>
                    <p>
                      Recevoir des invitations pour participer aux évènements
                      PFP Club
                    </p>
                  </div>
                </div>
                <div className="button">
                  <Link to="/home" className="title-h2">
                    JE DEVIENS MEMBRE
                  </Link>
                </div>
              </div>
              <div className="text card">
                <div className="number">3</div>
                <div>
                  <p>
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

export default Home;

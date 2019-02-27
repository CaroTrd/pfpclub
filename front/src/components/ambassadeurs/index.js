import React, { Component } from 'react';
import AmbassadeursList from '../Ambassadeurslist/index';
import '../../assets/styles/typo.scss';
import './index.scss';
import Partners from '../Partners/Partnerslevel/index';

class Ambassadeurs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="wrapper container">
          <div className="partners__intro">
            <h1 className="title-h2"> Les Ambassadeurs </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque sit amet sollicitudin justo.
              Vivamus egestas lorem metus, in euismod ante viverra ut.
              Curabitur et erat nisi. Quisque metus quam, ullamcorper
              sed augue sit amet, pulvinar gravida ligula.
              Pellentesque non nisl aliquam, pellentesque neque sagittis, imperdiet ex.
              Mauris tempus nibh arcu, a ultrices leo cursus quis.
              Morbi elementum tortor eget laoreet eleifend.
              Nam sed leo in urna pulvinar congue non ac urna.
              Integer faucibus metus id massa euismod posuere.
              Aenean dolor nulla, vehicula eget mollis a, accumsan sed felis.
            </p>
          </div>
          <AmbassadeursList />
        </div>
        <Partners />
      </div>
    );
  }
}

export default Ambassadeurs;

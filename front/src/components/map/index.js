/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import icon from './pins.png';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Marker = ({ img }) => <div><img src={icon} alt="ici" width="30" heigth="40" /></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },

    zoom: 18,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '30vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I' }}
          defaultCenter={[50.822220, 4.383720]}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={50.822220}
            lng={4.383720}
          />
          <AnyReactComponent
            lat={50.822220}
            lng={4.383720}
            text="PFP CLUB"
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

import React from 'react';
import { compose, withProps } from 'recompose';

import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

import pin from './pins2.png';

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCPzxx1Hx18ZT4q2ONjkyFWYRVhlmNrN-I&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map-container" style={{ height: '400px' }} />,
    mapElement: <div className="map" style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(() => (
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: 50.822239, lng: 4.383707 }}
  >
    <Marker key="marker" icon={{ url: pin, scale: 10 }} position={{ lat: 50.822291, lng: 4.383732 }} />
  </GoogleMap>
));

class MyFancyComponent extends React.PureComponent {
  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
    }, 3000);
  }

  handleMarkerClick = () => {
    this.delayedShowMarker();
  }

  render() {
    return (
      <MyMapComponent
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default MyFancyComponent;

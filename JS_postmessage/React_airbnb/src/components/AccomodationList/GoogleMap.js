/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import GoogleMapReact from 'google-map-react';

const CustomMarker = ({ text }) => (
  <div
    css={css`
      z-index: 100;
      background: white;
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      width: 70px;
      height: 30px;

      font-size: 15px;
    `}
  >
    {text}
  </div>
);

function GoogleMap() {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

  const defaultProps = {
    center: {
      lat: 37.6009055,
      lng: 126.9485623,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        // bootstrapURLKeys={{ key: `${apiKey}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <CustomMarker lat={37.6009055} lng={126.9485623} text="₩10,000" />
      </GoogleMapReact>
    </div>
  );
}

export default GoogleMap;

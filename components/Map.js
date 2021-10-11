import { Fragment, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Head from 'next/head';
// import './mapbox-gl.css';

function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.2343,
    longitude: -122.4323,
    zoom: 11,
  });
  return (
    <Fragment>
      <ReactMapGL
        mapStyle='mapbox://styles/vratosabo/cktuehewz17ux18lp97x5v5fa'
        width='100%'
        height='100%'
        latitude={37.7577}
        longitude={-122.4376}
        zoom={11}
        mapboxApiAccessToken={process.env.mapbox_key}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      />
    </Fragment>
  );
}

export default Map;

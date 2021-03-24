import React from 'react'
import GoogleMapReact from 'google-map-react';
import './Map.css';
import Marker from './Marker';
function Map({res}) {
    return (
        <div className="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key : 'AIzaSyByNQmuki1GKBE_Jev28HkDf6QkANEdIJM' }}
              defaultCenter={{ 
                lat: res?.data?.latitude,
                lng: res?.data?.longitude}}
              defaultZoom={6}
            >
                <Marker
            lat={res?.data?.latitude}
            lng={res?.data?.longitude}
            name="My Marker"
            color="red"
          />

            </GoogleMapReact>
        </div>
    )
}


export default Map

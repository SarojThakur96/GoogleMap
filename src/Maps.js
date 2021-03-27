import React, { useEffect } from 'react'
import { MapContainer, TileLayer,Marker,Popup } from "react-leaflet";
import './Maps.css'
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export const icon = new Icon({
    iconUrl: "https://www.clipartmax.com/png/middle/136-1367384_icon-marker-png.png",
    iconSize: [25, 25]
  });

function Maps({ latitude, longitude }) {

    const position =[latitude, longitude];

    return (
        <div className='map'>
            <MapContainer
                center={position}
                zoom={3}
                scrollWheelZoom={false}
            >
           <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

                <Marker key={1} position={position} icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                   </Popup>
              </Marker>
                
            </MapContainer>
        </div>
    )
}

export default Maps

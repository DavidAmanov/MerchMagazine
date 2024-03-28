import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'
import L from 'leaflet';
import customMarkerIcon from '../images/marker.png'

export default function MapComp(){
    const customIcon = new L.Icon({
        iconUrl: customMarkerIcon,
        iconSize: [40, 40], 
        iconAnchor: [20, 40], 
      });
    return(
        <div className="mapContainer">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]} icon={customIcon}>
          <Popup>
             Our store
          </Popup>
        </Marker>
      </MapContainer> 
      </div>
    )
}

  

  
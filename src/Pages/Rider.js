import React from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RiderData from '../Components/riderdata'
const Rider = () => {

     const icon = L.icon({
          iconUrl: "https://raw.githubusercontent.com/hqdung99/open-street-map-search-component/main/public/placeholder.png",
          iconSize: [35, 35],
     });

     return (
          <div className="position-relative vh-100 vw-100 d-flex align-items-center ">
               <div className="position-absolute top-0 start-0 h-100 w-100" style={{ zIndex: -1 }}>
                    <MapContainer center={[51.55, -0.09]} zoom={8}
                         style={{ width: "100%", height: "100%" }}>
                         <TileLayer
                              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                         />
                         <Marker position={[51.505, -0.09]} icon={icon}>

                         </Marker>
                    </MapContainer>
               </div>

               <div className="position-absolute top-0 start-50 translate-middle-x  clearflex bg-white rounded-5 " style={{ hight: "300px", width: "500px" }} >
                    <RiderData />
               </div>
          </div >
     )
};

export default Rider;

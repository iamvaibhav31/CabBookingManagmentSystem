import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const icon = L.icon({
     iconUrl: "https://raw.githubusercontent.com/hqdung99/open-street-map-search-component/main/public/placeholder.png",
     iconSize: [35, 35],
});

const position = [51.505, -0.09];

function ResetCenterView({ selectPosition }) {
     const map = useMap();

     useEffect(() => {
          if (selectPosition) {
               map.setView(
                    L.latLng(selectPosition?.lat, selectPosition?.lon),
                    map.getZoom(),
                    {
                         animate: true
                    }
               )
          }
     }, [selectPosition]);

     return null;
}

const Mapview = ({ selectPosition }) => {

     const locationSelection = [selectPosition?.lat, selectPosition?.lon];

     return (
          <MapContainer
               center={position}
               zoom={8}
               style={{ width: "100%", height: "100%" }}
          >
               <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key={YOU_KEY}"
               />
               {selectPosition && (
                    <Marker position={locationSelection} icon={icon}>
                         <Popup>
                              {selectPosition?.display_name}
                         </Popup>
                    </Marker>
               )}
               <ResetCenterView selectPosition={selectPosition} />
          </MapContainer>
     );
};

export default Mapview;

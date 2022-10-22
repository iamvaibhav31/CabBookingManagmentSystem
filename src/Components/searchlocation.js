import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SerchLocation } from '../features/Apis/SearchLocation/SearchLocationRequest'


const searchlocation = ({ Setlongitude, Setlatitude, setlocation }) => {
     const dispatch = useDispatch();
     const [show, setshow] = useState(false);
     const [searchText, setSearchText] = useState("");

     return (
          <form class="row">
               <div class="col-8">
                    <input type="text" class="form-control" value={searchText}
                         onChange={(event) => {
                              setSearchText(event.target.value);
                         }} />


               </div>
               <button type="submit" class="btn btn-primary col-3" onClick={() => {
                    setshow(true);
                    const params = {
                         q: searchText,
                         format: "json",
                         addressdetails: 1,
                         polygon_geojson: 0,
                    };
                    const queryString = new URLSearchParams(params).toString();

                    dispatch(SerchLocation(queryString))
               }}> Search</button>
          </form >
     );
};

export default searchlocation;

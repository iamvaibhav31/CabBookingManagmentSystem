import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SerchLocation } from '../features/Apis/SearchLocation/SearchLocationRequest'
import { selectAlllocation, getstatus, geterror } from '../features/Slice/SearchLocationsSlice'

const Searchlocation = ({ Setpositions }) => {
     const dispatch = useDispatch();
     const [show, setShow] = useState(false);
     const [searchText, setSearchText] = useState("");

     const locationlist = dispatch(selectAlllocation)
     const status = dispatch(getstatus)
     const error = dispatch(geterror)

     const setzindex = show === true ? -1 : 1;

     return (
          <form class="row">
               <div class="col-8">
                    <input type="text" class="form-control" value={searchText}
                         onChange={(event) => {
                              setSearchText(event.target.value);
                         }} />

               </div>
               <button type="submit" class="btn btn-primary col-3" onClick={() => {
                    const params = {
                         q: searchText,
                         format: "json",
                         addressdetails: 1,
                         polygon_geojson: 0,
                    };
                    const queryString = new URLSearchParams(params).toString();
                    console.log(queryString);
                    dispatch(SerchLocation(queryString))
                    setShow(true);
               }}> Search</button>
          </form >
     );
};

export default Searchlocation;

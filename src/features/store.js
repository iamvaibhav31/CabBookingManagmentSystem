import { configureStore } from "@reduxjs/toolkit";
import DriverSlice from "./Slice/DriverSlice"
import RiderSlice from './Slice/RiderSlice'
import SearchLocationsSlice from "./Slice/SearchLocationsSlice";


export const store = configureStore({
     reducer: {
          Driver: DriverSlice,
          Rider: RiderSlice,
          SearchLocations: SearchLocationsSlice,

     }
});
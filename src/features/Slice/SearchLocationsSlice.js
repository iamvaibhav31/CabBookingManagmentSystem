import { createSlice } from "@reduxjs/toolkit";
import { SerchLocation } from '../Apis/SearchLocation/SearchLocationRequest'



const initialState = {
     locationlist: [],
     status: 'idle', // idle | loading | successful | failed
     error: null
}


const RiderSlice = createSlice({
     name: 'SearchLocations',
     initialState,
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(SerchLocation.pending, (state, action) => {
                    state.status = "loading"
               })
               .addCase(SerchLocation.fulfilled, (state, action) => {
                    state.status = "successful"
                    state.locationlist = action.payload
               })
               .addCase(SerchLocation.rejected, (state, action) => {
                    state.status = "failed"
                    state.locationlist = []
                    state.error = action.error.message
               })
     }
})

export const selectAlllocation = state => state.SearchLocations.locationlist
export const getstatus = state => state.SearchLocations.status
export const geterror = state => state.SearchLocations.error
export default RiderSlice.reducer;
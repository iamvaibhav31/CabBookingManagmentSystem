import { createSlice } from "@reduxjs/toolkit";




const initialState = {
     RiderID: 0,
     RiderData: {
          name: "",
          Role: "",
          Currentlocation: "",
          CurrentLongitude: 0,
          CurrentLatitude: 0,
          Droplocation: "",
          DropLongitude: 0,
          DropLatitude: 0,
     },
     drivedistance: 0,
     drivecost: 0,
     riderhistory: [],
     nearbydriver: [],
     status: 'idle', // idle | loading | successful | failed
     error: null
}


const RiderSlice = createSlice({
     name: 'Rider',
     initialState,
     reducers: {},
     // extraReducers(builder) {
     //      builder
     //           .addCase(fetchUsers.pending, (state, action) => {
     //                state.status = "loading"
     //           })
     //           .addCase(fetchUsers.fulfilled, (state, action) => {
     //                state.status = "successful"
     //                state.users = action.payload
     //           })
     //           .addCase(fetchUsers.rejected, (state, action) => {
     //                state.status = "failed"
     //                state.users = []
     //                state.error = action.error.message
     //           })
     // }
})


// export const { addPosts } = UserSlice.actions;
// export const selectAlluser = state => state.Users.users
export default RiderSlice.reducer;
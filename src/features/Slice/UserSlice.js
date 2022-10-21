import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = createAsyncThunk("Users/fetchUsers", async () => {
     try {
          const response = await axios.get(USERS_URL)
          return response.data
     } catch (e) {
          return e.message
     }
})

const initialState = {
     users: [],
     status: 'idle', // idle | loading | successful | failed
     error: null
}


const UserSlice = createSlice({
     name: 'users',
     initialState,
     reducers: {},
     extraReducers(builder) {
          builder
               .addCase(fetchUsers.pending, (state, action) => {
                    state.status = "loading"
               })
               .addCase(fetchUsers.fulfilled, (state, action) => {
                    state.status = "successful"
                    state.users = action.payload
               })
               .addCase(fetchUsers.rejected, (state, action) => {
                    state.status = "failed"
                    state.users = []
                    state.error = action.error.message
               })
     }
})


// export const { addPosts } = UserSlice.actions;
export const selectAlluser = state => state.Users.users
export default UserSlice.reducer;
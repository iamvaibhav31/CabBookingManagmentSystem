import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, addNewPosts, editPosts, deletePosts } from "../Apis/Driver/PostRequest";


const initialState = {
     DriverID: 0,
     DriverData: {
          name: "",
          Role: "",
          Currentlocation: "",
          CurrentLongitude: 0,
          CurrentLatitude: 0,
          ondrive: false
     },
     driverhistory: [],
     status: 'idle', // idle | loading | successful | failed
     error: null
}

const DriverSlice = createSlice({
     name: 'Driver',
     initialState,
     reducers: {
          // addDriver(state, actions) {
          //      state.DriverData.name = actions.payload.name
          //      state.DriverData.Role = actions.payload.role
          //      state.DriverData.Currentlocation = actions.payload.currentlocation
          //      state.DriverData.CurrentLongitude = actions.payload.CurrentLongitude
          //      state.DriverData.CurrentLatitude = actions.payload.CurrentLatitude
          // },


     },
     extraReducers(builder) {
          builder
               .addCase(fetchPosts.pending, (state, action) => {
                    state.status = "loading"
               })
               .addCase(fetchPosts.fulfilled, (state, action) => {
                    state.status = "successful"

                    const loadedpost = action.payload.map(p => {
                         p.reaction = {
                              thumbsup: 0,
                              coffee: 0,
                              wow: 0,
                              hearts: 0,
                              rocket: 0
                         }
                         return p
                    })

                    state.posts = state.posts.concat(loadedpost)
               })
               .addCase(fetchPosts.rejected, (state, action) => {
                    state.status = "failed"
                    state.error = action.error.message
               })
               .addCase(addNewPosts.fulfilled, (state, action) => {


                    action.payload.userId = Number(action.payload.userId)
                    action.payload.reactions = {
                         thumbsup: 0,
                         coffee: 0,
                         wow: 0,
                         hearts: 0,
                         rocket: 0
                    }

                    state.posts.push(action.payload)
               })

               .addCase(editPosts.fulfilled, (state, action) => {
                    if (!action.payload?.id) {
                         console.log("update could not complete", action.payload)
                         return
                    }

                    const { id } = action.payload
                    const posts = state.posts.filter(post => post.id !== id)
                    state.posts = [...posts, action.payload]
               })

               .addCase(deletePosts.fulfilled, (state, action) => {
                    if (!action.payload?.id) {
                         console.log("Delete could not complete", action.payload)
                         return
                    }

                    const { id } = action.payload
                    const posts = state.posts.filter(post => post.id !== id)
                    state.posts = posts
               })


     }
})


// export const { addPosts, addreactions, editPost } = DriverSlice.actions;


// export const selectAllpost = state => state.Posts.posts
// export const getpoststatus = state => state.Posts.status
// export const getposterror = state => state.Posts.error
// export const selectPostbyId = (state, id) => state.Posts.posts.find(post => post.id === id)




export default DriverSlice.reducer;
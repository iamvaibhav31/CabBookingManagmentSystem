import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchPosts, addNewPosts, editPosts, deletePosts } from "../Apis/Post/PostRequest";


const initialState = {
     posts: [],
     status: 'idle', // idle | loading | successful | failed
     error: null
}


const PostSlice = createSlice({
     name: 'posts',
     initialState,
     reducers: {
          addPosts: {
               reducer(state, actions) {
                    state.posts.push(actions.payload)
               },
               prepare(title, content, userID) {
                    return {
                         payload: {
                              userId: userID,
                              id: nanoid(),
                              title: title,
                              content: content,
                              reaction: {
                                   thumbsup: 0,
                                   wow: 0,
                                   hearts: 0,
                                   rocket: 0,
                                   coffee: 0
                              }
                         }
                    }
               }
          },
          addreactions: {
               reducer(state, action) {
                    const { postID, reaction } = action.payload
                    const existingpost = state.posts.find(p => p.id === postID)
                    console.log(existingpost)
                    if (existingpost) {
                         existingpost.reaction[reaction]++
                    }
               },
               prepare(id, reaction) {
                    return {
                         payload: {
                              postID: id,
                              reaction
                         }
                    }
               }
          },

          // editPost: {
          //      reducer(state, action) {
          //           const { id, title, body, userid, reaction } = action.payload
          //           state.posts.map((post) => {
          //                if (post.id === id) {
          //                     return { title: title, body: body, userId: userid, reaction: reaction };
          //                }
          //           })

          //      },
          //      prepare(id, title, context, userid, reaction) {
          //           return {
          //                payload: {
          //                     id: id,
          //                     title: title,
          //                     body: context,
          //                     userId: userid,
          //                     reaction: reaction
          //                }
          //           }
          //      }
          // }


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


export const { addPosts, addreactions, editPost } = PostSlice.actions;


export const selectAllpost = state => state.Posts.posts
export const getpoststatus = state => state.Posts.status
export const getposterror = state => state.Posts.error
export const selectPostbyId = (state, id) => state.Posts.posts.find(post => post.id === id)




export default PostSlice.reducer;
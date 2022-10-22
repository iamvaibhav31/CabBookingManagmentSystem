import { createAsyncThunk } from "@reduxjs/toolkit";
import postApi from "../BasicURL";

const POSTS_URL = "/posts"

export const fetchPosts = createAsyncThunk("Posts/fetchPosts", async () => {
     try {
          const response = await postApi.get(POSTS_URL)
          return response.data
     } catch (e) {
          return e.message
     }
})

export const addNewPosts = createAsyncThunk("Posts/addPosts", async (initialPost) => {
     try {
          const response = await postApi.post(POSTS_URL, initialPost)
          return response.data
     } catch (e) {
          return e.message
     }
})

export const editPosts = createAsyncThunk("Posts/editPosts", async (initialPost) => {
     const { id } = initialPost
     try {
          const response = await postApi.delete(`${POSTS_URL}/${id}`, initialPost)
          return response.data
     } catch (e) {
          return e.message
     }
})

export const deletePosts = createAsyncThunk("Posts/deletePosts", async (initialPost) => {
     const { id } = initialPost
     try {
          const response = await postApi.patch(`${POSTS_URL}/${id}`)
          if (response?.status === 200) return initialPost
          return `${response.status} : ${response.statusText}`
     } catch (e) {
          return e.message
     }
})
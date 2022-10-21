import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./Slice/PostSlice"
import UserSlice from './Slice/UserSlice'



export const store = configureStore({
     reducer: {
          Posts: PostReducer,
          Users: UserSlice,
     }
});
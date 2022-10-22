import { createAsyncThunk } from "@reduxjs/toolkit";
import { SerchLocationURL } from "../BasicURL";
import axios from "axios";


export const SerchLocation = createAsyncThunk("SerchLocation/fetchLocation", async (Query) => {
     try {
          const response = await axios.get(`${SerchLocationURL}${Query}`)
          return response.data
     } catch (e) {
          return e.message
     }
})
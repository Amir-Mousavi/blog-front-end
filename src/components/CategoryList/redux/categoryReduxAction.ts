import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import FirebaseToken from "../../../FirebaseToken";

export const fetchCategories = createAsyncThunk("category/fetch", async () => {
  const response: AxiosResponse = await axios(
    `${process.env.REACT_APP_API_URL}category/`,
    {
      headers: {
        Authorization: FirebaseToken.token!!,
      },
    }
  );

  return response.data;
});

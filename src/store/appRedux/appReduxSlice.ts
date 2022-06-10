import { createSlice } from "@reduxjs/toolkit";
import { setSnackbarMessage, removeSnackbarMessage } from "./appReduxActions";

const appReduxSlice = createSlice({
  name: "app",
  initialState: {
    message: null,
  },
  reducers: {
    setSnackbarMessage,
    removeSnackbarMessage,
  },
});

export const reducer = appReduxSlice.reducer;
export const actions = appReduxSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { setSnackbarMessage, removeSnackbarMessage } from "./appReduxActions";

export interface AppState {
  message: string | null;
}

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

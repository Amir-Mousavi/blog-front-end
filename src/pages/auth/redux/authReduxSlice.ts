import { createSlice } from "@reduxjs/toolkit";
import { createUserAction, signInAction } from "./authActions";
import firebase from "firebase/compat";

interface AuthState {
  user: firebase.auth.UserCredential | null;
}

const authReduxSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUserAction.fulfilled, (state: AuthState, action) => {
      state.user = JSON.parse(action.payload);
    });

    builder.addCase(signInAction.fulfilled, (state: AuthState, action) => {
      state.user = JSON.parse(action.payload);
    });
  },
});

export const reducer = authReduxSlice.reducer;

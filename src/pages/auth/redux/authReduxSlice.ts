import { createSlice } from "@reduxjs/toolkit";
import { createUserAction, signInAction } from "./authActions";
import { User } from "firebase/auth";

interface AuthState {
  user: User | null;
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

import { createSlice } from "@reduxjs/toolkit";
import { createUserAction, signInAction } from "./authActions";

const authReduxSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createUserAction.fulfilled, (state: any, action) => {
      state.user = JSON.parse(action.payload);
    });

    builder.addCase(signInAction.fulfilled, (state: any, action) => {
      state.user = JSON.parse(action.payload);
    });
  },
});

export const reducer = authReduxSlice.reducer;

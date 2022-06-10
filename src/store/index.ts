import { configureStore } from "@reduxjs/toolkit";
import { reducer, createUserAction } from "../pages/auth/redux";

export const store = configureStore({
  reducer: {
    auth: reducer,
  },
});

store.subscribe(() => {
  console.log({ state: store.getState() });
});

store.dispatch(
  createUserAction({
    email: "amir1@amir.com",
    password: "testtest",
  })
);

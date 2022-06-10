import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "../pages/auth/redux";
import { reducer as appReducer } from "./appRedux/appReduxSlice";

export const store = configureStore({
  reducer: {
    auth: reducer,
    app: appReducer,
  },
});

store.subscribe(() => {
  console.log({ state: store.getState() });
});

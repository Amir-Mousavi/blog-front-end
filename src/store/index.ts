import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { reducer } from "../pages/auth/redux";
import { reducer as appReducer } from "./appRedux/appReduxSlice";
import { reducer as categoryReducer } from "../components/CategoryList/redux/categoryReduxSlice";

import FirebaseToken from "../FirebaseToken";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: reducer,
  app: appReducer,
  category: categoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

store.subscribe(() => {
  const user: any = store.getState().auth.user;

  if (user) {
    FirebaseToken.token = user?.stsTokenManager.accessToken;
  } else {
    FirebaseToken.token = null;
  }
});

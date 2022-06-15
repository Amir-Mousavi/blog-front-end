import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "./authReduxSlice";
import { createUser, signInUser } from "../../../firebase";

export const createUserAction = createAsyncThunk(
  "users/create",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await createUser(email, password);
    return JSON.stringify(userCredential.user);
  }
);

export const signInAction = createAsyncThunk(
  "users/signIn",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInUser(email, password);

    return JSON.stringify(userCredential.user);
  }
);

export const updateUser = (
  state: AuthState,
  { payload }: PayloadAction<string>
) => {
  state.user = JSON.parse(payload);
};

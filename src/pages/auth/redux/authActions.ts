import { createAsyncThunk } from "@reduxjs/toolkit";

import { createUser, signInUser } from "../../../firebase";

export const createUserAction = createAsyncThunk(
  "users/create",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await createUser(email, password);
    return JSON.stringify(userCredential);
  }
);

export const signInAction = createAsyncThunk(
  "users/signIn",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await signInUser(email, password);

    return JSON.stringify(userCredential);
  }
);

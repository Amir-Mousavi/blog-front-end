import { createAsyncThunk } from "@reduxjs/toolkit";

import { createUser } from "../../../firebase";

export const createUserAction = createAsyncThunk(
  "users/create",
  async ({ email, password }: { email: string; password: string }) => {
    const userCredential = await createUser(email, password);
    return JSON.stringify(userCredential);
  }
);

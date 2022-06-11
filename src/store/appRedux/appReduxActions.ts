import { PayloadAction } from "@reduxjs/toolkit";

import { AppState } from "./appReduxSlice";

export function setSnackbarMessage(
  state: AppState,
  { payload }: PayloadAction<string | null>
) {
  state.message = payload;
}

export function removeSnackbarMessage(state: AppState) {
  state.message = null;
}

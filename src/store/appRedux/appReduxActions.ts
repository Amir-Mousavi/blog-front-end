import { AnyAction } from "@reduxjs/toolkit";

export function setSnackbarMessage(state: any, action: AnyAction) {
  state.message = action.payload;
}

export function removeSnackbarMessage(state: any) {
  state.message = null;
}

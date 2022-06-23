import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryReduxAction";

interface CategoryState {
  fetching: boolean;
  categories: any[];
}

const categorySlice = createSlice({
  name: "category",
  initialState: {
    fetching: false,
    categories: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchCategories.fulfilled,
      (state: CategoryState, action) => {
        state.fetching = false;
        state.categories = action.payload;
      }
    );

    builder.addCase(fetchCategories.pending, (state: CategoryState) => {
      state.fetching = true;
    });

    builder.addCase(fetchCategories.rejected, (state: CategoryState) => {
      state.fetching = false;
    });
  },
});

export const reducer = categorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState: {
    value: "",
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export const selectsearchValue = (state) => state.searchValue.value;

export default searchValueSlice.reducer;

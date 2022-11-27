import { createSlice } from "@reduxjs/toolkit";

export const allPlaylistsSlice = createSlice({
  name: "allPlaylists",
  initialState: {
    value: [],
  },
  reducers: {
    setallplaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setallplaylists } = allPlaylistsSlice.actions;
export const selectAllPlaylists = (state) => state.allPlaylists.value;

export default allPlaylistsSlice.reducer;

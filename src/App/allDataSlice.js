import { createSlice } from "@reduxjs/toolkit";

export const allPlaylistsSlice = createSlice({
  name: "allPlaylists",
  initialState: {
    value: [],
  },
  reducers: {
    fetchallplaylists: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchallplaylists } = allPlaylistsSlice.actions;
export const selectAllPlaylists = (state) => state.allPlaylists.value;

export default allPlaylistsSlice.reducer;

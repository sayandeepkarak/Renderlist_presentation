import { createSlice } from "@reduxjs/toolkit";

export const activePlaylistSlice = createSlice({
  name: "currentPlaylist",
  initialState: {
    value: undefined,
  },
  reducers: {
    fetchActivePlaylist: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchActivePlaylist } = activePlaylistSlice.actions;
export const selectAllPlaylists = (state) => state.currentPlaylist.value;

export default activePlaylistSlice.reducer;

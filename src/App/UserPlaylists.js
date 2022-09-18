import { createSlice } from "@reduxjs/toolkit";

export const UserPlaylists = createSlice({
  name: "UserPlaylists",
  initialState: {
    value: [],
  },
  reducers: {
    fetchUserPlaylists: (state, action) => {
      state.value = action.payload.map((e) => ({
        ...e.data(),
        Id: e.id,
      }));
    },
  },
});

export const { fetchUserPlaylists } = UserPlaylists.actions;
export const selectUserPlaylists = (state) => state.UserPlaylists.value;

export default UserPlaylists.reducer;

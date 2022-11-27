import { createSlice } from "@reduxjs/toolkit";

export const UserPlaylists = createSlice({
  name: "UserPlaylists",
  initialState: {
    value: [],
  },
  reducers: {
    setUserPlaylists: (state, action) => {
      state.value = action.payload.map((e) => ({
        ...e.data(),
        Id: e.id,
      }));
    },
  },
});

export const { setUserPlaylists } = UserPlaylists.actions;
export const selectUserPlaylists = (state) => state.UserPlaylists.value;

export default UserPlaylists.reducer;

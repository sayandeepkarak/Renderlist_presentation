import { configureStore } from "@reduxjs/toolkit";
import allPlayListReducers from "./allDataSlice";
import activePlayListReducers from "./activePlaylistSlice";
import userPlaylistsReducers from "./UserPlaylists";

export const store = configureStore({
  reducer: {
    allPlayListReducers,
    activePlayListReducers,
    userPlaylistsReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import { configureStore } from "@reduxjs/toolkit";
import allPlayListReducers from "./allDataSlice";
import activePlayListReducers from "./activePlaylistSlice";

export const store = configureStore({
  reducer: { allPlayListReducers, activePlayListReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

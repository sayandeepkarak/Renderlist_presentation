import { configureStore } from "@reduxjs/toolkit";
import allPlayListReducers from "./allDataSlice";
import activePlayListReducers from "./activePlaylistSlice";
import searchValueReducers from "./searchValueSlice";

export const store = configureStore({
  reducer: { allPlayListReducers, activePlayListReducers, searchValueReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

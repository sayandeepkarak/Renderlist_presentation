import { configureStore } from "@reduxjs/toolkit";
import allPlayListReducers from "./allDataSlice";

export const store = configureStore({
  reducer: { allPlayListReducers },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

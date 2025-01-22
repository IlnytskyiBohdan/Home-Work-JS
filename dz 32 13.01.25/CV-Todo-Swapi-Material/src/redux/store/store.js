import { configureStore } from "@reduxjs/toolkit";
import { swapiSlice } from "../slice/slice";

export const store = configureStore({
  reducer: {
    swapi: swapiSlice.reducer,
  },
});

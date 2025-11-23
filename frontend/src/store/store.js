import { configureStore } from "@reduxjs/toolkit";

import safetySlice from "./resultsSlice";
import authSlice from "./AuthSlice"

export const store = configureStore({
  reducer: {
    auth:authSlice,
    safety:safetySlice,
  },
});

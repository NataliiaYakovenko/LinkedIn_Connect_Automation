import { configureStore } from "@reduxjs/toolkit";
import automationReducer from "./slices/automationSlice";

const store = configureStore({
  reducer: {
    automation: automationReducer,
  },
});

export default store;

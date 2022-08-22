import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/fetchDataReducer";

export const store = configureStore({
  reducer: {
    fetchData: dataReducer,
  },
});

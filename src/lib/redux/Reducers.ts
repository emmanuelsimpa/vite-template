import { combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./Apislice";
import { AuthSlice } from "@/features/auth/Slice";

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: AuthSlice.reducer,
});

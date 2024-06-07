/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { apiSlice } from "./Apislice";
import { rootReducer } from "./Reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware =
  import.meta.env.MODE === "development"
    ? (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
          immutableCheck: true,
          serializableCheck: false,
        }).concat(apiSlice.middleware)
    : (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
          immutableCheck: false,
          serializableCheck: false,
        }).concat(apiSlice.middleware);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
  devTools: import.meta.env.MODE !== "production",
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

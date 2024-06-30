import {configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './apislice';
import {rootReducer} from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = (getDefaultMiddleware: any) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }).concat(apiSlice.middleware);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middleware,
});

setupListeners(store.dispatch);

const persistor = persistStore(store);

export {store, persistor};
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

import {combineReducers} from '@reduxjs/toolkit';
import {apiSlice} from './apislice';
import {AuthSlice} from '@/features/auth/slice';
import {DashboardSlice} from '@/features/dashboard/slice';
import {ToastSlice} from '@/common/components/toast/slice';

export const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: AuthSlice.reducer,
  dasshboard: DashboardSlice.reducer,
  toast: ToastSlice.reducer,
});

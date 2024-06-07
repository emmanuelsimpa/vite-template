import { createSlice } from "@reduxjs/toolkit";

type State = {
  user: unknown | null;
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: State = {
  user: null,
  refreshToken: null,
  accessToken: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const { accessToken, user, refreshToken } = action.payload.data;
      state.user = user;
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
    },
    logOut: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const { setUser, logOut } = AuthSlice.actions;

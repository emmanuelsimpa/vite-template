import {createSlice} from '@reduxjs/toolkit';

type State = {
  user: null | {id: string};
  accessToken: string | null;
  refreshToken: string | null;
};

const initialState: State = {
  user: null,
  refreshToken: null,
  accessToken: null,
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      const {user, jwt} = action.payload.data;
      state.user = user;
      state.refreshToken = jwt.refreshToken;
      state.accessToken = jwt.accessToken;
    },
    logOut: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
    },
  },
});

export const {setUser, logOut} = AuthSlice.actions;

import {createSlice} from '@reduxjs/toolkit';

type State = {
  _id: string | null;
};

const initialState: State = {
  _id: null,
};

export const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState: initialState,
  reducers: {
    setId: (state, action) => {
      state._id = action.payload;
    },
  },
});

export const {setId} = DashboardSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

export interface UserType {
  userid: string;
  password: string;
  email: string;
  name: string;
  phone: string;
  birth: string;
  address: string;
}

export interface UserState {
  loading: boolean;
  data: UserType[];
  error: any;
}

const initialState: UserState = {
  loading: false,
  data: [],
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    signupRequest(state: UserState) {
      state.loading = true;
    },
    signupSuccess(state: UserState, { payload }) {
      state.data = [...state.data, payload];
      state.loading = false;
    },
    signupFailure(state: UserState, { payload }) {
      state.error = payload;
      state.loading = false;
    },
  },
});

const { reducer, actions } = userSlice;
export const userActions = actions;
export default reducer;

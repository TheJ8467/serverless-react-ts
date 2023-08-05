import { createSlice } from '@reduxjs/toolkit';
import { addUser } from '../thunks/addUser';
import { User } from '../../interfaces/User';
import { UserSliceState } from '../../interfaces/UserSliceState';

const initialState: UserSliceState<User> = {
  isLoading: false,
  data: [],
  error: null,
  isLogin: false,
  email: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    }
  }
});

export const {
  setIsLogin,
  setEmail,
} = usersSlice.actions
export const usersReducer = usersSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { addUser } from '../thunks/addUser';
import { User } from '../../interfaces/User';
import { UserSliceState } from '../../interfaces/UserSliceState';

const initialState: UserSliceState<User> = {
  isLoading: false,
  data: [],
  error: null,
};

// Fetching, adding user. It was created eariler, it will be built more soon.
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      if (action.error) {
        state.error = action.error.message;
      }
    });
  },
});

export const usersReducer = usersSlice.reducer;

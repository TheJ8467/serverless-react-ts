import { createSlice } from '@reduxjs/toolkit';
import { addAddress } from '../thunks/addAddress';
import { Address } from '../../interfaces/Address';
import { SliceState } from '../../interfaces/SliceState';

const initialState: SliceState<Address> = {
  isLoading: false,
  data: [],
  error: null,
};

const addressesSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addAddress.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addAddress.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addAddress.rejected, (state, action) => {
      state.isLoading = false;
      if (action.error) {
        state.error = action.error.message;
      }
    });
  },
});

export const addressesReducer = addressesSlice.reducer;

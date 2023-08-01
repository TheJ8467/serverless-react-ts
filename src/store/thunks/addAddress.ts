import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// it is for simplified useAddAddressMutation
const addAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('http://localhost:3005/addresses', {
    address: 'some address',
  });

  return response.data;
});

export { addAddress };

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// it is for simplified useAddAddressMutation
const addAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('/api/db', {
    address: 'some address',
  });

  return response.data;
});

export { addAddress };

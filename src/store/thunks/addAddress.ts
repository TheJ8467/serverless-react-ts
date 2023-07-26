import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('http://localhost:3005/addresses', {
    address: 'some address',
  });

  return response.data;
});

export { addAddress };

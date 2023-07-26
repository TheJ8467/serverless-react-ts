import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('http://localhost:3005/addresses', {
    name: 'some name',
  });

  return response.data;
});

export { fetchAddress };

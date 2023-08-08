import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchAddress = createAsyncThunk('addresses/add', async () => {
  const response = await axios.post('/api/db');

  return response.data;
});

export { fetchAddress };

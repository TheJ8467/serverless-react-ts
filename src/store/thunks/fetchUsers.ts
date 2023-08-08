import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  try {
    const response = await axios.get('/api/db');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export { fetchUsers };

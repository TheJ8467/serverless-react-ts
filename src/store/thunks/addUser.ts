import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// it is for simplified useAddUserMutation
const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3005/users', {
    name: 'some name',
  });

  return response.data;
});

export { addUser };

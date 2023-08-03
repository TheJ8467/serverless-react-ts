import { createSlice } from '@reduxjs/toolkit';
import { AppSliceState } from '../../interfaces/AppSliceState';


const initialState: AppSliceState = {
    isLogin: false,
    showModal: false,
    showRegisterModal: false,
    showSignInModal: false,
};

// Fetching, adding user. It was created eariler, it will be built more soon.
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
        state.isLogin = action.payload
    },
    setShowModal: (state, action) => {
        state.showModal = action.payload
    },
    setShowRegisterModal: (state, action) => {
        state.showRegisterModal = action.payload
    },
    setShowSignInModal: (state, action) => {
        state.showSignInModal = action.payload
    }
  },

});

export const {
    setIsLogin,
    setShowModal,
    setShowRegisterModal,
    setShowSignInModal,
} = appSlice.actions

export const appReducer = appSlice.reducer;

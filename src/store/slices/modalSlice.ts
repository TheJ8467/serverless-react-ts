import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalSliceState } from '../../interfaces/ModalSliceState';

const initialState: ModalSliceState = {
  showModal: false,
  showRegisterModal: false,
  showSignInModal: false,
};

// Fetching, adding user. It was created eariler, it will be built more soon.
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal: (state, action: PayloadAction<boolean>) => {
      state.showModal = action.payload;
    },
    setShowRegisterModal: (state, action: PayloadAction<boolean>) => {
      state.showRegisterModal = action.payload;
    },
    setShowSignInModal: (state, action: PayloadAction<boolean>) => {
      state.showSignInModal = action.payload;
    },
  },
});

export const { setShowModal, setShowRegisterModal, setShowSignInModal } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;

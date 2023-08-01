/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { RootState, useCheckAuthStatusQuery } from '../../../store';
import { useSelector } from 'react-redux';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import RegisterPage from './RegisterPage';

// This page is in progress.
// This page will manage sign in, sign out, register

const RegisterUser: FC<ModalCompProps> = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const handleClose = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input />
        <label>Password</label>
        <input />
        <label>Confirm password</label>
        <input />
      </form>
    </div>
  );
};

export default RegisterUser;

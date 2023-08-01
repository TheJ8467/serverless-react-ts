/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { RootState, useCheckAuthStatusQuery } from '../../store';
import { useSelector } from 'react-redux';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import RegisterPage from '../main-screen/5F-navbar/RegisterManager';

// This page is in progress.
// This page will manage sign in, sign out, register

const RegisterModalPage: FC<ModalCompProps> = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const handleClose = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  return (
    <div>
      <form>
        <div className="flex justify-between p-4">
          <label>Email</label>
          <input className="w-5/12 border border-black" />
        </div>
        <div className="flex justify-between p-4">
          <label>Password</label>
          <input className="w-5/12 border border-black" />
        </div>
        <div className="flex justify-between p-4">
          <label>Confirm password</label>
          <input className="w-5/12 border border-black" />
        </div>
      </form>
    </div>
  );
};

export default RegisterModalPage;

/* eslint-disable @typescript-eslint/no-unused-vars */

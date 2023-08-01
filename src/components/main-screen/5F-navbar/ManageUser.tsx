/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, SetStateAction } from 'react';
import { RootState, useCheckAuthStatusQuery } from '../../../store';
import { useSelector } from 'react-redux';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import RegisterPage from './RegisterPage';

// This page is in progress.
// This page will manage sign in, sign out, register

const ManageUser: FC<ModalCompProps> = ({
  showModal,
  setShowModal,
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const userData = useSelector((state: RootState) => {
    return state.users.data;
  });
  const { isLoading, data, error } = useCheckAuthStatusQuery({});

  const handleClose = () => {
    setShowModal(!showModal);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  let loginStatus;
  if (typeof data !== 'undefined') {
    loginStatus = <p>{data.isLogin ? 'Logged in' : 'Guest'}</p>;
  }

  return (
    <div>
      <p className="p-4 text-center">{loginStatus}</p>
      <div className="flex justify-between m-4">
        <button
          className="flex border rounded-xl p-2 bg-yellow-400 mr-4"
          onClick={handleClose}
        >
          Sign in
        </button>
        <button
          className="flex border rounded-xl p-2 bg-blue-400"
          onClick={handleRegisterClick}
        ></button>
      </div>
    </div>
  );
};

export default ManageUser;

/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC } from 'react';
import { RootState, useCheckAuthStatusQuery } from '../../../store';
import { useSelector } from 'react-redux';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';

// This page is in progress.
// This page will manage sign in, sign out, register

const ManageUser: FC<ModalCompProps> = ({ showModal, setShowModal }) => {
  const userData = useSelector((state: RootState) => {
    return state.users.data;
  });
  const { isLoading, data, error } = useCheckAuthStatusQuery({});

  const handleClose = () => {
    setShowModal(!showModal);
  };

  let loginStatus;
  if (typeof data !== 'undefined') {
    loginStatus = <p>{data.isLogin ? 'Logged in' : 'Logged out'}</p>;
  }

  return (
    <div>
      {/* <p>{content}</p> */}
      <p className="p-4">{loginStatus}</p>
      <button
        className="flex ml-auto border rounded-xl p-2 bg-yellow-400"
        onClick={handleClose}
      >
        Sign in
      </button>
    </div>
  );
};

export default ManageUser;

/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, SetStateAction, useEffect, useState } from 'react';
import { RootState, useCheckAuthStatusQuery, useGetCurrentUserInfoQuery } from '../../store';
import { useSelector } from 'react-redux';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';

// This page is in progress.
// This page will manage sign in, sign out, register

const UserInfoModalPage: FC<ModalCompProps> = ({
  isLogin,
  showModal,
  setShowModal,
  showRegisterModal,
  setShowRegisterModal,
  showSignInModal,
  setShowSignInModal,
}) => {
  const userData = useSelector((state: RootState) => {
    return state.users.data;
  });
  const { data } = useCheckAuthStatusQuery({});
  const { data: currentUser} = useGetCurrentUserInfoQuery({});
  const [ user, setUser ] = useState(isLogin)


  const handleClose = () => {
    setShowModal(!showModal);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleSignInClick = () => {
    // start from here for setting up sign in modal
    setShowSignInModal(true);
  };

  let loginStatus;

useEffect(() => {
  const fetchUserId = async() => {
  const userId = await currentUser[currentUser.length - 1].email
  setUser(userId)
}
fetchUserId()
}, [currentUser])


if (typeof data !== 'undefined') {
    //TODO: render logged in user instead of Logged in
    loginStatus = <p>{isLogin ? user : 'Guest'}</p>;
  }

  return (
    <div>
      <p className="p-4 text-center">{loginStatus}</p>
      <div className="flex justify-between m-4">
        <button
          className="flex border rounded-xl p-2 bg-yellow-400 mr-4"
          onClick={handleSignInClick}
        >
          Sign in
        </button>
        <button
          className="flex border rounded-xl p-2 bg-blue-400"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default UserInfoModalPage;

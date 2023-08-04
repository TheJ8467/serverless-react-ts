/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, SetStateAction, useEffect, useState } from 'react';
import { useCheckAuthStatusQuery, useGetCurrentUserInfoQuery } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';

// This page is in progress.
// This page will manage sign in, sign out, register

const MyInfoModalPage: FC<ModalCompProps> = ({}) => {
  const { isLogin, handlesSetShowRegisterModal, handlesSetSignInModal } = useModalState();

  const { data } = useCheckAuthStatusQuery({});
  const { data: currentUser} = useGetCurrentUserInfoQuery({});
  const [ user, setUser ] = useState()

  const handleRegisterClick = () => {
    if (handlesSetShowRegisterModal) {
      handlesSetShowRegisterModal(true);
  }
  };

  const handleSignInClick = () => {
    if (handlesSetSignInModal) {
      handlesSetSignInModal(true);
  }
  };

  let loginStatus;
//Add isloading, error state if possible
useEffect(() => {
  const fetchUserId = async() => {
    if (currentUser && currentUser.length > 0) {
  const userId = await currentUser[currentUser.length - 1].email
  setUser(userId)
  }
}
 {isLogin && fetchUserId()}
}, [currentUser, isLogin])


if (typeof data !== 'undefined') {
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

export default MyInfoModalPage;

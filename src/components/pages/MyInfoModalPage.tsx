/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useEffect } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import { useModalState } from '../../hooks/use-modal-state';

// This page is in progress.
// This page will manage sign in, sign out, register

const MyInfoModalPage: FC<ModalCompProps> = ({}) => {
  const {
    isLogin,
    email,
    handlesSetShowRegisterModal,
    handlesSetSignInModal,
    handlesSetIsLogin,
    handleSetEmail,
  } = useModalState();

  const handleRegisterClick = () => {
    handlesSetShowRegisterModal(true);
  };

  const handleSignInClick = () => {
    handlesSetSignInModal(true);
  };

  let loginStatus;

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    const email = localStorage.getItem('email');

    if (isLogin === 'true' && email) {
      handlesSetIsLogin(true);
      handleSetEmail(email);
    }

    console.log(isLogin, email);
  }, []);

  loginStatus = <p>{isLogin ? email : 'Guest'}</p>;

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

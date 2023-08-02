/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useState } from 'react';
import { useLoginMutation } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import CryptoJS from 'crypto-js';

// This page is in progress.
// This page will manage sign in, sign out, register

const SignInModalPage: FC<ModalCompProps> = ({
  showModal,
  setShowModal,
  showRegisterModal,
  setShowRegisterModal,
  showSignInModal,
  setShowSignInModal,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const [signIn, { isLoading, data, error }] = useLoginMutation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(e.target.value);
  };

  const hashPassword = (pwd: any) => {
    return CryptoJS.SHA256(pwd).toString();
  };

  const handleSignInSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const hashedPassword = hashPassword(password);

    const credentials = {
      email: email,
      password: hashedPassword,
    };
    const result = await signIn(credentials).unwrap();

    if (result.status === 'fulfilled') {
      const { accessToken, expirationTime } = result.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('expirationTime', expirationTime);
      setEmail('');
      setPassword('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSignInSubmit}>
        <div className="flex justify-between p-4 border border-black">
          <label>Email</label>
          <input
            className="w-5/12 border border-black"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="flex justify-between p-4 border border-black">
          <label>Password</label>
          <input
            className="w-5/12 border border-black"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>

        <button className="border rounded-lg border-black p-2 mt-2 float-right">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignInModalPage;

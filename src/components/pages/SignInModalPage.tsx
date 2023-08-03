/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useState } from 'react';
import { useCheckAuthStatusQuery, useGetUserInfoQuery, useLoginMutation, useUpdateAuthStatusMutation } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import CryptoJS from 'crypto-js';

// This page is in progress.
// This page will manage sign in, sign out, register

const SignInModalPage: FC<ModalCompProps> = ({
  showSignInModal,
  setShowSignInModal,
  isLogin,
  setIsLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signIn] = useLoginMutation();
  const { data: userInfo, isLoading, isError } = useGetUserInfoQuery({});

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

    try {
      const result = await signIn(credentials).unwrap();

      if (userInfo.some((user: { email: any; password: any; }) => user.email === email && user.password === password)) {
        const { accessToken, expirationTime } = result;
  
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('expirationTime', expirationTime);
        setEmail('');
        setPassword('');
        if (setIsLogin){
        setIsLogin(true)
        }
        setShowSignInModal(!showSignInModal);}
        
    } catch (error) {
      console.error('Error signing in:', error);
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

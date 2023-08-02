/* eslint-disable @typescript-eslint/no-unused-vars */

import { FunctionComponent as FC, useState } from 'react';
import { useRegisterMutation } from '../../store';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';

// This page is in progress.
// This page will manage sign in, sign out, register

const SignInModalPage: FC<ModalCompProps> = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const handleClose = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const [register, { isLoading, data, error }] = useRegisterMutation();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setConfirmPassword(e.target.value);
  };

  const handleRegisterSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== ConfirmPassword) {
      alert('Passwords do not match');
    } else {
      register({ email, password });
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div>
      <form onSubmit={handleRegisterSubmit}>
        <div className="flex justify-between p-4">
          <label>Email</label>
          <input
            className="w-5/12 border border-black"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className="flex justify-between p-4">
          <label>Password</label>
          <input
            className="w-5/12 border border-black"
            name="password"
            onChange={handlePasswordChange}
            value={password}
            type="password"
          />
        </div>
        <div className="flex justify-between p-4">
          <label>Confirm password</label>
          <input
            className="w-5/12 border border-black"
            name="confirm-password"
            onChange={handleConfirmPasswordChange}
            value={ConfirmPassword}
            type="password"
          />
        </div>
        <button className="border rounded-lg border-black">Register</button>
      </form>
    </div>
  );
};

export default SignInModalPage;

import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import MyInfoManager from '../main-screen/5F-navbar/MyInfoManager';
import RegisterManager from '../main-screen/5F-navbar/RegisterManager';
import SignInManager from '../main-screen/5F-navbar/SignInManager';
import { useDispatch } from 'react-redux';
import { setShowModal, setShowRegisterModal, setShowSignInModal } from '../../store/slices/modalSlice';
import { setIsLogin, setEmail } from '../../store/slices/userSlice';
import { useModalState } from '../../hooks/use-modal-state';

const ModalManager: FC<ModalCompProps> = () => {
  // const dispatch = useDispatch()
  // const { showModal, showRegisterModal, showSignInModal, isLogin, handlesSetShowModal, handlesSetIsLogin, handlesSetShowRegisterModal, handlesSetSignInModal, handleSetEmail } = useModalState();

  // const handleSetShowModal = (value: boolean) => {
  //   dispatch(setShowModal(value));
  // }
  // const handleSetShowRegisterModal = (value: boolean) => {
  //   dispatch(setShowRegisterModal(value));
  // }
  // const handleSetShowSignInModal = (value: boolean) => {
  //   dispatch(setShowSignInModal(value));
  // }
  // const handleSetIsLogin = (value: boolean) => {
  //   dispatch(setIsLogin(value));
  // }
  // const handleSetEmail

  return (
    <>
      <MyInfoManager/>
      <RegisterManager/>
      <SignInManager/>
    </>
  )
}

export default ModalManager

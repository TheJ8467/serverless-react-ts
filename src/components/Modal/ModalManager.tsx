import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import MyInfoManager from '../main-screen/5F-navbar/MyInfoManager';
import RegisterManager from '../main-screen/5F-navbar/RegisterManager';
import SignInManager from '../main-screen/5F-navbar/SignInManager';
import { useDispatch, useSelector } from 'react-redux';
import { setShowModal, setShowRegisterModal, setShowSignInModal } from '../../store/slices/modalSlice';
import { setIsLogin } from '../../store/slices/userSlice';

const ModalManager: FC<ModalCompProps> = () => {
  const dispatch = useDispatch()
  const { showModal, showRegisterModal, showSignInModal, isLogin } = useSelector( (state: any) => ({...state.modal,   isLogin: state.user ? state.user.isLogin : false,}) )

  const handleSetShowModal = (value: boolean) => {
    dispatch(setShowModal(value));
  }
  const handleSetShowRegisterModal = (value: boolean) => {
    dispatch(setShowRegisterModal(value));
  }
  const handleSetShowSignInModal = (value: boolean) => {
    dispatch(setShowSignInModal(value));
  }
  const handleSetIsLogin = (value: boolean) => {
    dispatch(setIsLogin(value));
  }

  return (
    <>

      <MyInfoManager
        isLogin={isLogin}
        showModal={showModal}
        setShowModal={handleSetShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={handleSetShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={handleSetShowSignInModal}
      />
      <RegisterManager
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={handleSetShowRegisterModal}
      />
      <SignInManager
        setIsLogin={handleSetIsLogin}
        showSignInModal={showSignInModal}
        setShowSignInModal={handleSetShowSignInModal}
      />
    </>
  )
}

export default ModalManager

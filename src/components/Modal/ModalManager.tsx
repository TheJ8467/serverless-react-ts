import { FunctionComponent as FC } from 'react';
import { ModalCompProps } from '../../interfaces/props/ModalCompProps';
import MyInfoManager from '../main-screen/5F-navbar/MyInfoManager';
import RegisterManager from '../main-screen/5F-navbar/RegisterManager';
import SignInManager from '../main-screen/5F-navbar/SignInManager';


const ModalManager: FC<ModalCompProps> = ({setIsLogin, isLogin, showModal, setShowModal, showRegisterModal, setShowRegisterModal, showSignInModal, setShowSignInModal }) => {
    return (
        <>
       <MyInfoManager
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      <RegisterManager
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      <SignInManager
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      </>
      )
    }

export default ModalManager
// this interface is used for appying modal at component

export interface ModalCompProps {
  setIsLogin?: (value: boolean) => void;
  isLogin?: boolean;
  showModal?: boolean;
  setShowModal?: (value: boolean) => void;
  showRegisterModal?: boolean;
  setShowRegisterModal?: (value: boolean) => void;
  showSignInModal?: boolean;
  setShowSignInModal?: (value: boolean) => void;
}

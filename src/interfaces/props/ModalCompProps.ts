// this interface is used for appying modal at component

export interface ModalCompProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showRegisterModal: boolean;
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  showSignInModal: boolean;
  setShowSignInModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin?:React.Dispatch<React.SetStateAction<boolean>>;
  isLogin?: boolean;
}

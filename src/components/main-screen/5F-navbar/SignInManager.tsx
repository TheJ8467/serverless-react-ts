import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal/Modal';
import SignInModalPage from '../../pages/SignInModalPage';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';

const SignInManager: FC<ModalCompProps> = ({
  setIsLogin,
  showSignInModal,
  setShowSignInModal,
}) => {
  const handleClose = () => {
    if(setShowSignInModal){
    setShowSignInModal(!showSignInModal);
  }
  };

  // this is close button at the bottom
  const actionBar = (
    <div>
      <button
        onClick={handleClose}
        className="border rounded-xl bg-red-300 p-2"
      >
        Close
      </button>
    </div>
  );

  // we will render this, based on state of showModal
  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={actionBar}
      containerId="sign-in-page"
    >
      <SignInModalPage
        setIsLogin={setIsLogin}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    </Modal>
  );

  return <div>{showSignInModal && modal}</div>;
};

export default SignInManager;

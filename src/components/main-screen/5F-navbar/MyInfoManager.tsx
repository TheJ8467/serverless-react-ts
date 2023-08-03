import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal/Modal';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import UserInfoModalPage from '../../pages/UserInfoModalPage';

//this page shows modal version for user authentication.
const MyinfoManager: FC<ModalCompProps> = ({
  isLogin,
  setIsLogin,
  showModal,
  setShowModal,
  showRegisterModal,
  setShowRegisterModal,
  showSignInModal,
  setShowSignInModal,
}) => {
  const handleClose = () => {
    setShowModal(!showModal);
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
      containerId="my-info-page"
    >
      <UserInfoModalPage
      setIsLogin={setIsLogin}
      isLogin={isLogin}
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyinfoManager;

import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal/Modal';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import MyInfoModalPage from '../../pages/MyInfoModalPage';
import { setShowRegisterModal } from '../../../store/slices/modalSlice';

//this page shows modal version for user authentication.
const MyinfoManager: FC<ModalCompProps> = ({
  isLogin,
  showModal,
  setShowModal,
  showSignInModal,
  setShowSignInModal,
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const handleClose = () => {
    if (setShowModal) {
    setShowModal(!showModal);
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
      containerId="my-info-page"
    >
      <MyInfoModalPage
        isLogin={isLogin}
        setShowRegisterModal={setShowRegisterModal}
        showRegisterModal={showRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyinfoManager;

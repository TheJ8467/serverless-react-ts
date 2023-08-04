import { FunctionComponent as FC, SetStateAction } from 'react';
import Modal from '../../Modal/Modal';
import RegisterModalPage from '../../pages/RegisterModalPage';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';

const RegisterManager: FC<ModalCompProps> = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  
  const handleClose = () => {
    if (setShowRegisterModal) {
    setShowRegisterModal(!showRegisterModal);
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
      containerId="register-page"
    >
      <RegisterModalPage
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
    </Modal>
  );

  return <div>{showRegisterModal && modal}</div>;
};

export default RegisterManager;

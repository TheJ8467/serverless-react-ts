import { FunctionComponent as FC, SetStateAction } from 'react';
import Modal from '../../Modal/Modal';
import ManageRegister from '../../pages/RegisterModalPage';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';

const RegisterManager: FC<ModalCompProps> = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const handleClose = () => {
    setShowRegisterModal(!showRegisterModal);
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
      <ManageRegister
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showModal={false}
        setShowModal={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Modal>
  );

  return <div>{showRegisterModal && modal}</div>;
};

export default RegisterManager;

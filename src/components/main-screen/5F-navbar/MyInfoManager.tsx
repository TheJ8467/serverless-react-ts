import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal/Modal';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import ManageUser from '../../pages/UserInfoModalPage';

//this page shows modal version for user authentication.
const MyinfoManager: FC<ModalCompProps> = ({
  showModal,
  setShowModal,
  showRegisterModal,
  setShowRegisterModal,
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
      <ManageUser
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyinfoManager;

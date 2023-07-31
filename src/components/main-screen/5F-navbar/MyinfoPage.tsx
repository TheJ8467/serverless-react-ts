import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import ManageUser from './ManageUser';

//this page shows modal version for user authentication.
const MyInfoPage: FC<ModalCompProps> = ({ showModal, setShowModal }) => {
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
    <Modal onClose={handleClose} actionBar={actionBar}>
      <ManageUser showModal={showModal} setShowModal={setShowModal} />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyInfoPage;

import { FunctionComponent as FC, SetStateAction } from 'react';
import Modal from '../../Modal';
import { ModalCompProps } from '../../../interfaces/props/ModalCompProps';
import { useSelector } from 'react-redux';
import ManageUser from './ManageUser';

const MyInfoPage: FC<ModalCompProps> = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };

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
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <ManageUser showModal={showModal} setShowModal={setShowModal} />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyInfoPage;

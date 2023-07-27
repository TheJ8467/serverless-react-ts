import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal';
import { MyInfoProps } from '../../../interfaces/props/MyInfoProps';
import { useSelector } from 'react-redux';
import ManageUser from './ManageUser';

const MyInfo: FC<MyInfoProps> = ({ showModal, setShowModal }) => {
  const handleClose = () => {
    setShowModal(!showModal);
  };

  const actionBar = (
    <div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <ManageUser />
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyInfo;

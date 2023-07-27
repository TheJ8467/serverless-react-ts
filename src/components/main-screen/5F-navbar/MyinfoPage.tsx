import { FunctionComponent as FC } from 'react';
import Modal from '../../Modal';
import { MyInfoProps } from '../../../interfaces/props/MyInfoProps';

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
      <p>Here displays user</p>
    </Modal>
  );

  return <div>{showModal && modal}</div>;
};

export default MyInfo;

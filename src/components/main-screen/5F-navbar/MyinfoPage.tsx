import { useState } from 'react';
import Modal from '../../Modal';

function MyInfo() {
  const [showModal, setShowModal] = useState(false);

  //   const handleClick = () => {
  //     setShowModal(true);
  //   };

  const handleClose = () => {
    setShowModal(!showModal);
    console.log(showModal);
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

  return (
    <div>
      {/* <button onClick={handleClick}>Open Modal</button>
      {showModal && modal} */}
      {showModal && modal}
    </div>
  );
}

export default MyInfo;

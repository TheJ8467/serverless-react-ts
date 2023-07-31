import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { ModalProps } from '../interfaces/props/ModalProps';

// actionBar is for close button at the bottom
// onClose is for closing by clicking outside of modal
function Modal({ onClose, children, actionBar }: ModalProps) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed top-20 left-20 right-20 bottom-60 pb-20 pl-10 pr-10 bg-white">
        <div className="flex items-center justify-center h-full">
          {children}
        </div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector('.modal-container')!,
  );
}

export default Modal;

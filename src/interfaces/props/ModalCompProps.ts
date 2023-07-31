// this interface is used for appying modal at component

export interface ModalCompProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

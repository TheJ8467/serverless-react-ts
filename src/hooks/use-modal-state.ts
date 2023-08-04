import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store";
import { setShowModal, setShowRegisterModal, setShowSignInModal } from "../store/slices/modalSlice";
import { setIsLogin } from "../store/slices/userSlice";

export const useModalState = () => {
    const dispatch = useDispatch();
    const { showModal, showRegisterModal, showSignInModal } = useSelector((state: RootState) => state.modal)
    const { isLogin } = useSelector((state: RootState) => state.users)

    const handlesSetShowModal = (value: boolean) => dispatch(setShowModal(value));
    const handlesSetShowRegisterModal = (value: boolean) => dispatch(setShowRegisterModal(value));
    const handlesSetSignInModal = (value: boolean) => dispatch(setShowSignInModal(value));
    const handlesSetIsLogin = (value: boolean) => dispatch(setIsLogin(value));

    return {
        showModal,
        showRegisterModal,
        showSignInModal,
        isLogin,
        handlesSetIsLogin,
        handlesSetShowModal,
        handlesSetShowRegisterModal,
        handlesSetSignInModal
    }
}
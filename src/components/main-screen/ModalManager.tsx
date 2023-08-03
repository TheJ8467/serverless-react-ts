import { FunctionComponent, useState } from "react"
import MyInfoManager from "./5F-navbar/MyInfoManager"
import RegisterManager from "./5F-navbar/RegisterManager"
import SignInManager from "./5F-navbar/SignInManager"



const ModalManager: FunctionComponent<{}> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false)
  
    return (
      <div>
<MyInfoManager
        setIsLogin={setIsLogin}
        isLogin={isLogin}
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      <RegisterManager
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
      <SignInManager
      setIsLogin={setIsLogin}
        isLogin={isLogin}
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
</div>)}
export default ModalManager
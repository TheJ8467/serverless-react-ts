import { FunctionComponent, useState } from 'react';
import Searchbar from './main-screen/1F-searh/Searchbar';
import Linkbars from './main-screen/2F-hashbars/Linkbars';
import MainSquares from './main-screen/3F-squares/MainSquares';
import EventRactangle from './main-screen/4F-event-rectangle/EventRactangle';
import Navbar from './main-screen/5F-navbar/Navbar';
import MyInfoManager from './main-screen/5F-navbar/MyInfoManager';
import RegisterManager from './main-screen/5F-navbar/RegisterManager';
import SignInManager from './main-screen/5F-navbar/SignInManager';

const App: FunctionComponent<{}> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      <Searchbar />
      <Linkbars />
      <MainSquares />
      <EventRactangle />
      <Navbar setShowModal={setShowModal} />
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
    </div>
  );
};

export default App;

import { FunctionComponent, SetStateAction, useState } from 'react';
import Searchbar from './main-screen/1F-searh/Searchbar';
import Linkbars from './main-screen/2F-hashbars/Linkbars';
import MainSquares from './main-screen/3F-squares/MainSquares';
import EventRactangle from './main-screen/4F-event-rectangle/EventRactangle';
import Navbar from './main-screen/5F-navbar/Navbar';
import MyInfoPage from './main-screen/5F-navbar/MyInfoPage';
import RegisterPage from './main-screen/5F-navbar/RegisterPage';

const App: FunctionComponent<{}> = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <div>
      <Searchbar />
      <Linkbars />
      <MainSquares />
      <EventRactangle />
      <Navbar setShowModal={setShowModal} />
      <MyInfoPage
        showModal={showModal}
        setShowModal={setShowModal}
        showRegisterModal={showRegisterModal}
        setShowRegisterModal={setShowRegisterModal}
      />
      <RegisterPage
        showModal={false}
        setShowModal={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
        showRegisterModal={false}
        setShowRegisterModal={function (value: SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default App;

import { FunctionComponent, useState } from 'react';
import Searchbar from './main-screen/1F-searh/Searchbar';
import Linkbars from './main-screen/2F-hashbars/Linkbars';
import MainSquares from './main-screen/3F-squares/MainSquares';
import EventRactangle from './main-screen/4F-event-rectangle/EventRactangle';
import Navbar from './main-screen/5F-navbar/Navbar';
import ModalManager from './Modal/ModalManager';

const App: FunctionComponent<{}> = () => {
  
  return (
    <div>
      <Searchbar />
      <Linkbars />
      <MainSquares />
      <EventRactangle />
      <Navbar />
      <ModalManager />
    </div>
  );
};

export default App;

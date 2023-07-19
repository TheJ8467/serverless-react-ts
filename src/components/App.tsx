import { FunctionComponent } from 'react';
import Searchbar from './main-screen/1F-searh/Searchbar';
import Linkbars from './main-screen/2F-hashbars/Linkbars';
import MainSquares from './main-screen/3F-squares/MainSquares';
import EventRactangle from './main-screen/4F-event-rectangle/EventRactangle';

const App: FunctionComponent<{}> = () => {
  return (
    <>
      <Searchbar />
      <Linkbars />
      <MainSquares />
      <EventRactangle />
    </>
  );
};

export default App;

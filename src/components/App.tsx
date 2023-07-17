import { FunctionComponent } from 'react';
import Searchbar from './Searchbar';
import Linkbars from './Linkbars';
import MainSquares from './main-screen/MainSquares';

const App: FunctionComponent<{}> = () => {
  return (
    <>
    <Searchbar />
    <Linkbars/>
    <MainSquares/>
    </>
  );
}

export default App;

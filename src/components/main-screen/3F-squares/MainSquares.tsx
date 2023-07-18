import { FunctionComponent as FC } from 'react';
import LargeSqures from './LargeSquares';
import LongRectangle from './LongRectangle';
import SmallRectangles from './SmallRectangles';
import SmallSqures from './SmallSquares';

const MainSquares: FC<{}> = () => {
  return (
    <>
      <LargeSqures />
      <LongRectangle />
      <SmallRectangles />
      <LongRectangle logo={true} />
      <SmallSqures />
    </>
  );
};

export default MainSquares;

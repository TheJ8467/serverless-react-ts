import { FunctionComponent as FC } from 'react';
import LargeSqures from './LargeSquare';
import LongRectangle from './LongRectangle';
import SmallRectangle from './SmallRectangle';
import SmallSqures from './SmallSquares';

const MainSquares: FC<{}> = () => {
  return (
    <>
      <LargeSqures />
      <LongRectangle />
      <SmallRectangle />
      <LongRectangle />
      <SmallSqures />
    </>
  );
};

export default MainSquares;

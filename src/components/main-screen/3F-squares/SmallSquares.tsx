import { FunctionComponent as FC } from 'react';
import SmallSqure from './SmallSquare';

const SmallSqures: FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <SmallSqure />
      <SmallSqure />
      <SmallSqure />
      <SmallSqure />
    </div>
  );
};

export default SmallSqures;

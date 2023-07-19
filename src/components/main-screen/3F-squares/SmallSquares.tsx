import { FunctionComponent as FC } from 'react';
import SmallSqure from './SmallSquare';

const SmallSqures: FC<{}> = () => {
  return (
    <div className="flex justify-center mx-3 my-2">
      <SmallSqure />
      <SmallSqure />
      <SmallSqure />
      <SmallSqure />
    </div>
  );
};

export default SmallSqures;

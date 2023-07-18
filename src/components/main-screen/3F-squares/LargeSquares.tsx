import { FunctionComponent as FC } from 'react';
import LargeSquare from './LargeSquare';

const LargeSqures: FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <LargeSquare char={true} />
      <LargeSquare char={false} />
    </div>
  );
};

export default LargeSqures;

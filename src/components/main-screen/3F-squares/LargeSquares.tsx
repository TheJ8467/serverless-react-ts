import { FunctionComponent as FC } from 'react';
import LargeSquare from './LargeSquare';

const LargeSqures: FC<{}> = () => {
  return (
    <div className="flex justify-center mx-3 mb-2">
      <LargeSquare char={true} hasLink={true} />
      <LargeSquare char={false} />
    </div>
  );
};

export default LargeSqures;

import { FunctionComponent as FC } from 'react';
import SmallRectangle from './SmallRectangle';

const SmallRectangles: FC<{}> = () => {
  return (
    <div className="flex justify-center mx-1 my-2">
      <SmallRectangle hasLink={true} />
      <SmallRectangle />
    </div>
  );
};

export default SmallRectangles;

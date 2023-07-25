import { FunctionComponent as FC } from 'react';
import { SquareProps } from '../../../interfaces/SquareProps';

const SmallRectangle: FC<SquareProps> = ({ innerImage }) => {
  return (
    <div className="mx-3 w-6/12 border rounded-lg p-2">
      <div className="flex justify-between">
        <div className=" ">
          <div className="flex justify-start">
            <h1 className=" font-bold text-2xl">Title</h1>
            {innerImage && <div className="border">img</div>}
          </div>

          <div>
            <p>Texts</p>
            <p className="font-bold">bold texts</p>
          </div>
        </div>

        <div className="flex items-center border">Some photo</div>
      </div>
    </div>
  );
};

export default SmallRectangle;

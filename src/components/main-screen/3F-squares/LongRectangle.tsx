import { FunctionComponent as FC } from 'react';
import { SquareProps } from '../../../interfaces/SquareProps';

const LongRectangle: FC<SquareProps> = ({ logo }) => {
  return (
    <div className="my-3 mx-4 w-auto border rounded-lg flex justify-between">
      <div className="p-2 flex flex-col justify-center">
        <h1 className="font-bold text-2xl">Some title</h1>
        <p>Some texts</p>
      </div>
      <div className="flex items-center m-4 border relative leading-loose pr-6 pb-6">
        Photo
        {logo && (
          <div className="border rounded-lg absolute -right-1 -bottom-1 bg-blue-200">
            logo
          </div>
        )}
      </div>
    </div>
  );
};

export default LongRectangle;

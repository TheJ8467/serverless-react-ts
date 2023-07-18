import { FunctionComponent as FC } from 'react';
import { SquareProps } from '../../../interfaces/SquareProps';

const LargeSquare: FC<SquareProps> = ({ char }) => {
  return (
    <div className="mx-2 w-6/12 border rounded-lg p-2">
      <div className="flex justify-start">
        <h1 className=" font-bold text-2xl">Some title</h1>
        {char && <p className="text-small ml-2 border">Char</p>}
      </div>
      <div className="">
        <p>Some texts</p>
        <p className="font-bold">Some bold texts</p>
      </div>
      <div className="flex justify-between">
        <div className="mt-10 border">small link</div>
        <div className="flex items-center border">Some photo</div>
      </div>
    </div>
  );
};

export default LargeSquare;

import { FunctionComponent as FC } from 'react';

const LongRectangle: FC<{}> = () => {
  return (
    <div className="m-2 w-auto border rounded-lg flex justify-between">
      <div className="p-2">
        <h1 className="font-bold text-2xl">Some title</h1>
        <p>Some texts</p>
      </div>
      <div className="flex items-center p-2 border">Some photo</div>
    </div>
  );
};

export default LongRectangle;

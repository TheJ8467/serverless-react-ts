import { FunctionComponent as FC } from 'react';

const SmallSqures: FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2 w-3/12 border rounded-lg p-2">
        <div className="flex items-center border justify-center">Photo</div>
        <p className=" font-bold text-sm text-center">Text</p>
      </div>
      <div className="mx-2 w-3/12 border rounded-lg p-2">
        <div className="flex items-center border justify-center">Photo</div>
        <p className=" font-bold text-sm text-center">Text</p>
      </div>
      <div className="mx-2 w-3/12 border rounded-lg p-2">
        <div className="flex items-center border justify-center">Photo</div>
        <p className=" font-bold text-sm text-center">Text</p>
      </div>
      <div className="mx-2 w-3/12 border rounded-lg p-2">
        <div className="flex items-center border justify-center">Photo</div>
        <p className=" font-bold text-sm text-center">Text</p>
      </div>
    </div>
  );
};

export default SmallSqures;

import { FunctionComponent as FC } from 'react';

const SmallSqure: FC<{}> = () => {
  return (
    <div className="mx-1 w-3/12 border rounded-lg p-2">
      <div className="flex items-center border justify-center py-2">Photo</div>
      <p className=" font-bold text-sm text-center py-1">Text</p>
    </div>
  );
};

export default SmallSqure;

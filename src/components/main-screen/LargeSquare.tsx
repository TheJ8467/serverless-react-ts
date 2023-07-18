import { FunctionComponent as FC } from 'react';

const LargeSqures: FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2 w-6/12 border rounded-lg p-2">
        <div className="flex justify-start">
          <h1 className=" font-bold text-2xl">Some title</h1>
          <p className="text-small ml-2 border">Char</p>
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
      <div className="mx-2 w-6/12 border rounded-lg p-2">
        <h1 className=" font-bold text-2xl">Some title</h1>
        <div className="">
          <p>Some texts</p>
          <p className="font-bold">Some bold texts</p>
        </div>
        <div className="pl-20 relative">
          <div className="absolute right-0 top-5 border">Some photo</div>
        </div>
      </div>
    </div>
  );
};

export default LargeSqures;

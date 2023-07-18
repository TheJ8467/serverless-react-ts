import { FunctionComponent as FC } from 'react';

const SmallRectangle: FC<{}> = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-2 w-6/12 border rounded-lg p-2">
        <div className="flex justify-between">
          <div className=" ">
            <div className="flex justify-start">
              <h1 className=" font-bold text-2xl">Title</h1>
              <div className="border">link</div>
            </div>

            <div>
              <p>Texts</p>
              <p className="font-bold">bold texts</p>
            </div>
          </div>

          <div className="flex items-center border">Some photo</div>
        </div>
      </div>
      <div className="mx-2 w-6/12 border rounded-lg p-2">
        <div className="flex justify-between">
          <div className="">
            <h1 className=" font-bold text-2xl">Title</h1>

            <div>
              <p>Texts</p>
              <p className="font-bold">bold texts</p>
            </div>
          </div>

          <div className="flex items-center border">Some photo</div>
        </div>
      </div>
    </div>
  );
};

export default SmallRectangle;

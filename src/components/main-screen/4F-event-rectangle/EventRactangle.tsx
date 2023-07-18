import { FunctionComponent as FC } from 'react';

const EventRactangle: FC<{}> = () => {
  return (
    <div className="m-2">
      <div className="flex overflow-x-scroll h-16 border items-center">
        <div className="w-full flex-shrink-0">Slide 1</div>
        <div className="w-full flex-shrink-0">Slide 2</div>
        <div className="w-full flex-shrink-0">Slide 3</div>
      </div>
    </div>
  );
};

export default EventRactangle;

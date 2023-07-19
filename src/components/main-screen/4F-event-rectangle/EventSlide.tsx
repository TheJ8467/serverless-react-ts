import { FunctionComponent as FC } from 'react';
import 'swiper/swiper.min.css';
interface EventSlideProps {
  id: number;
  event?: any;
}

const EventSlide: FC<EventSlideProps> = ({ id }) => {
  const totalNumber = 4;

  if (id > totalNumber) {
    throw new Error(
      `Update total number. current ${id} is greater than ${totalNumber}`,
    );
  }
  return (
    <>
      <div className="flex overflow-x-scroll h-16 border items-center relative bg-yellow-400">
        <div className="w-full flex-shrink-0 flex justify-center items-center">
          Slide {id}
          <a
            className="absolute right-4 bottom-2 border rounded-full px-2 py-1 bg-black bg-opacity-50 text-sm"
            href="/"
          >
            {id}/{totalNumber} Go to total event
          </a>
        </div>
      </div>
    </>
  );
};

export default EventSlide;

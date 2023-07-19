import { FunctionComponent as FC } from 'react';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import EventSlide from './EventSlide';

const EventRactangle: FC<{}> = () => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      className="swiper-slide m-2 w-auto"
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <EventSlide id={1} />
      </SwiperSlide>
      <SwiperSlide>
        <EventSlide id={2} />
      </SwiperSlide>
      <SwiperSlide>
        <EventSlide id={3} />
      </SwiperSlide>
      <SwiperSlide>
        <EventSlide id={4} />
      </SwiperSlide>
    </Swiper>
  );
};

export default EventRactangle;

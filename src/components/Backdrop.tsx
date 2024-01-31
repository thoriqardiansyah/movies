import "swiper/css";
import "swiper/css/pagination";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import React from "react";

type BackdropProps = {
  children: React.ReactNode;
};
const Backdrop: React.FC<BackdropProps> = ({ children }) => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {children}
    </Swiper>
  );
};

export default Backdrop;

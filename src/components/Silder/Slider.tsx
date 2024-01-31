import React from "react";
import { Swiper } from "swiper/react";
import SlideButton from "../SlideButton";
import { Keyboard } from "swiper/modules";
import "swiper/css";

type SliderProps = {
  children: React.ReactNode;
};

const Slider = ({ children }: SliderProps) => {
  return (
    <Swiper
      modules={[Keyboard]}
      spaceBetween={10}
      slidesPerView={6}
      // loop={true}
      // keyboard={{ enabled: true }}
      className="relative mx-16"
    >
      {children}
      <SlideButton />
    </Swiper>
  );
};

export default Slider;

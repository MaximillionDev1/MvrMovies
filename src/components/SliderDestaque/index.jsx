import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { getMovieOnDisplay } from "../../services/getData";

import CardDestaque from "../CardDestaque";

import "swiper/css";
import "swiper/css/pagination";

function SliderDestaque({ info, title }) {
 
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        speed={600}
        modules={[Pagination]}
        className="mySwiper"
      >
        {info.map((item, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <SwiperSlide key={index}>
            <CardDestaque item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default SliderDestaque;

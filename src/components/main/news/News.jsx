import React from "react";
import Button from "../../../UI/button/Button";
import Card from "../../../UI/card/Card";
import { news } from "../../data";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./news.css";

const News = () => {
  return (
    <article className="news">
      <h3>News & Highlight</h3>
      <Swiper
        // install Swiper modules
        className="swipe__con"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0:{
            spaceBetween: 20,
            slidesPerView: 1
          },
          768: {
            spaceBetween: 50,
            slidesPerView: 3
          },
        }}
      >
        {news.map((item) => {
          return (
            <SwiperSlide className="cardslide">
              <Card
                key={item.id}
                src={item.img}
                title={item.title}
                text={item.summary}
                button={<Button text={"Read more"} />}
              />
            </SwiperSlide>
          );
        })}
        ...
      </Swiper>
    </article>
  );
};

export default News;

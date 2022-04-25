import React from "react";

import { Box } from "@mui/material";

import { CardMain } from "component/CardMain";

// * Swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Slider = ({ cardData }) => {
  return (
    <>
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          centeredSlides={false}
          navigation={true}
          grabCursor={true}
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          modules={[Navigation]}
        >
          {cardData.map((cardD, key) => {
            const card = cardD.data();
            return (
              <SwiperSlide key={key}>
                <CardMain
                  title={card.name}
                  clubName={card.clubName}
                  description={card.description}
                  date={card.date}
                  location={card.location}
                  time={card.time}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
};

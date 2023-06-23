import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

const HeroSection = () => {
  return (
    <Box sx={{ py: 1 }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box component="img" src={slide1} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={slide2} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={slide3} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={slide4} width="100%" height="100%" />
        </SwiperSlide>
        <SwiperSlide>
          <Box component="img" src={slide5} width="100%" height="100%" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default HeroSection;

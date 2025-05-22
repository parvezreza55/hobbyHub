import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner_img1 from "../assets/images/sing.jpg";
import banner_img2 from "../assets/images/photography.jpg";
import banner_img3 from "../assets/images/tavell.jpg";
import banner_img4 from "../assets/images/cooking.jpg";
import banner_img5 from "../assets/images/gardening.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <div className="relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img1}
                className="h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img2}
                className="h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img3}
                className="h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img4}
                className="h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img5}
                className="h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <button className="absolute p-4 rounded-2xl bg-primary z-10 text-white font-bold text-2xl top-[15em] right-[27em]">
            Enjoy Your Hobby
          </button>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

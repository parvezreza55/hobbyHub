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
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img2}
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img3}
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img4}
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src={banner_img5}
                className="h-[20em] md:h-[35rem] w-11/12 mx-auto"
                alt=""
              />
            </div>
          </SwiperSlide>
          <div className="absolute p-2 md:p-4 rounded-2xl z-5 text-white top-[10em] left-[2em] md:top-[17em] md:left-[5em] lg:top-[15em] lg:left-[8em]">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white">
                HobbyHub
              </h1>
              <p className="w-3/4 text-xs md:text-lg">
                HobbyHub is a community platform that connects people with
                shared interests across a wide range of hobbies and activities.
                It encourages collaboration, learning, and engagement through
                interactive groups, events, and discussions.
              </p>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from "../../../../../public/gallery/graduate-1.jpg";
import image2 from "../../../../../public/gallery/graduate-2.jpg";
import image3 from "../../../../../public/gallery/graduate-3.jpg";
import image4 from "../../../../../public/gallery/graduate-4.jpg";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import Title from "../../../Shared/Title/Title";
const Gallery = () => {
  return (
    <div className="lg:w-[1400px] mx-auto w-full my-20 ">
      <Title
        firstTitle={"Gallery"}
        secondTitle={"Here is all the Memorable College Graduate Group Photos"}
      ></Title>
      <div className="flex my-20 justify-between items-center">
        {/* section info */}
        <div>
          <h1 className="text-5xl font-bold website-title my-3">Find Your Dream</h1>
          <h1 className="text-5xl font-bold website-title my-3">College and</h1>
          <h1 className="text-5xl font-bold website-title my-3"> University.</h1>
          <p className="my-3 w-3/4">Choose from our wide range of Colleges/Universities and Create your own Dream.</p>
          <button className="button px-3 mt-6">Get Started</button>
        </div>
        {/* section gallery */}
        <div className="w-1/2">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="w-full object-cover" src={image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full object-cover" src={image2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full object-cover" src={image3} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full object-cover" src={image4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

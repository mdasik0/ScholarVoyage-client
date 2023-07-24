import Title from "../../../Shared/Title/Title";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
    import "@smastrom/react-rating/style.css";

const Review = () => {
  return (
    <div className="lg:w-[1400px] mx-auto w-full my-20 ">
      <Title
        firstTitle={"Student Reviews"}
        secondTitle={
          "Discover What Our Students Have to Say About Their Enrolled Colleges on Our Website."
        }
      ></Title>
      <div className="mt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-xl h-[60vh]">
              {/* user image  */}
              <div className="w-20 h-20 ">
                <img
                  className="w-full h-full rounded-full"
                  src="/public/profile-picture.jpg"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Md Asik</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={3} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam accusamus quasi earum molestiae corrupti doloribus
                similique sapiente, dolore dolorem enim excepturi doloremque
                deleniti qui voluptates quod at neque. Impedit, quam.&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                Narayanganj College
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-xl h-[60vh]">
              {/* user image  */}
              <div className="w-20 h-20 ">
                <img
                  className="w-full h-full rounded-full"
                  src="/profile-picture.jpg"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Md Asik</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={3} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam accusamus quasi earum molestiae corrupti doloribus
                similique sapiente, dolore dolorem enim excepturi doloremque
                deleniti qui voluptates quod at neque. Impedit, quam.&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                Narayanganj College
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-xl h-[60vh]">
              {/* user image  */}
              <div className="w-20 h-20 ">
                <img
                  className="w-full h-full rounded-full"
                  src="/public/profile-picture.jpg"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Md Asik</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={3} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam accusamus quasi earum molestiae corrupti doloribus
                similique sapiente, dolore dolorem enim excepturi doloremque
                deleniti qui voluptates quod at neque. Impedit, quam.&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                Narayanganj College
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-xl h-[60vh]">
              {/* user image  */}
              <div className="w-20 h-20 ">
                <img
                  className="w-full h-full rounded-full"
                  src="/public/profile-picture.jpg"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Md Asik</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={3} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam accusamus quasi earum molestiae corrupti doloribus
                similique sapiente, dolore dolorem enim excepturi doloremque
                deleniti qui voluptates quod at neque. Impedit, quam.&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                Narayanganj College
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;

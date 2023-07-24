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
                  src="https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Cristopher nolan</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={3} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;The hostel is very good. The rooms are excellent because two people share one room and every room structure is excellent. The hostel has one canteen, and the mess time is 8 p.m. We get three meals a day and a balanced diet, and the menu changes weekly.&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                Stanford University
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-xl h-[60vh]">
              {/* user image  */}
              <div className="w-20 h-20 ">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Robert. pattienson</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={3.5} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;I am pursuing bachelor of technology in chemical engineering here at this college. Quality of teaching, you can say, is ok ok type. You will have to study on your end more to get knowledge and get good marks in the internal exams. Campus has necessarily all the latest technology and i think these things are getting me ready for core jobs&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                University of Cambridge
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-200 flex flex-col items-center justify-center rounded-xl h-[60vh]">
              {/* user image  */}
              <div className="w-20 h-20 ">
                <img
                  className="w-full h-full rounded-full"
                  src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt=""
                />
              </div>
              <h3 className="font-bold poppins mt-3 text-xl">Tom Holland</h3>
              {/* Rating */}
              <span className="my-3">
                <Rating style={{ maxWidth: 100 }} value={4.5} readOnly />
              </span>
              <span className="text-2xl text-blue-950">
                <BiSolidQuoteLeft />
              </span>
              <h2 className="text-center w-2/3 font-semibold mt-3">
                &#34;If you want campus life dont come here. Only come here for studies the college is located in outside of Hyderabad from here its 18 km to hyd in emergency there should be some problem also keep in mind that teacher dont care anything about students&#34;
              </h2>
              <p className="mt-4 font-semibold poppins text-slate-500">
                Harvard university
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
                &#34;I have been studing in here for 1 year its a great place. Teachers are very friendly and i am very happy to study here.&#34;
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

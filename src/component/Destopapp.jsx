import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Destopapp = () => {
  const swiperRef = useRef();

  return (
    <div className="destopapp">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        modules={[Pagination, Navigation]}
      >
        {/* 00 */}
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: sm:gad-4 gap-1 dest">
            <div className="div1">
              <div className="right-dest"></div>
            </div>
            <div className="lift-dest">
              <h1>
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here',
                making look like readable English.
              </p>
              <div className="flex justify-between ">
                <span>
                  <h1>
                    Benjir Walton ,{" "}
                    <span className="sm:text-lg text-xs"> merketer</span>
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: gad-4 dest">
            <div className="div1">
              <div className="right-dest2"></div>
            </div>
            <div className="lift-dest">
              <h1>
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here',
                making look like readable English.
              </p>
              <div className="flex justify-between ">
                <span>
                  <h1>
                    Benjir Walton ,{" "}
                    <span className="text-lg text-xs"> SCG First, Company</span>
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: gad-4 dest">
            <div className="div1">
              <div className="right-dest3"></div>
            </div>
            <div className="lift-dest">
              <h1>
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here',
                making look like readable English.
              </p>
              <div className="flex justify-between ">
                <span>
                  <h1>
                    Benjir Walton ,{" "}
                    <span className="text-lg text-xs"> merketer</span>
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid md:grid-cols-2 grid-cols-1 d: gad-4 dest">
            <div className="div1">
              <div className="right-dest4"></div>
            </div>
            <div className="lift-dest">
              <h1>
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here',
                making look like readable English.
              </p>
              <div className="flex justify-between ">
                <span>
                  <h1>
                    Benjir Walton ,{" "}
                    <span className="text-lg text-xs"> founder</span>
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid md:grid-cols-2 grid-cols-1 d: gad-4 dest">
            <div className="div1">
              <div className="right-dest5"></div>
            </div>
            <div className="lift-dest">
              <h1>
                Many desktop publishing packages and editors now as use thier{" "}
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of page when looking at its layout point
                of using is that it has more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here',
                making look like readable English.
              </p>
              <div className="flex justify-between ">
                <span>
                  <h1>
                    Benjir Walton ,{" "}
                    <span className="text-lg text-xs"> merketer</span>
                  </h1>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="btn  flex sm:justify-end justify-center">
          <span className="icon" onClick={() => swiperRef.current.slidePrev()}>
            <ArrowBackIcon />
          </span>
          <span className="icon" onClick={() => swiperRef.current.slideNext()}>
            <ArrowForwardIcon />
          </span>
        </div>
      </Swiper>
    </div>
  );
};

export default Destopapp;

import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import Price from "../component/Price";
import React, { useRef } from "react";
// swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { sliderSetting } from "../component/slider";
// card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Destopapp from "../component/Destopapp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Portfolio = () => {
  const swiperRef = useRef();
  return (
    <>
      <div id="Portfolio">
        <div className=" px-16 prot">
          <div className="flex justify-between  pt-28">
            <div>
              <h1 className="text-5xl">Recent Work.</h1>
              <p className="pt-3">
                Must explain to you how all this mistaken idea <br /> pleasure
                born and give you a complete account.
              </p>
            </div>
            <div className="icon ">
              <FollowTheSignsIcon className="icon1" />
            </div>
          </div>
          <div>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              {...sliderSetting}
            >
              <SwiperSlide className="py-10">
                <Card
                  sx={{
                    maxWidth: 345,
                  }}
                  className="card1"
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="py-10">
                <Card sx={{ maxWidth: 345 }} className="card1">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="py-10">
                <Card sx={{ maxWidth: 345 }} className="card1">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="py-10">
                <Card sx={{ maxWidth: 345 }} className="card1">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="py-10">
                <Card sx={{ maxWidth: 345 }} className="card1">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="py-10">
                <Card sx={{ maxWidth: 345 }} className="card1">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <SwiperSlide className="py-10">
                <Card sx={{ maxWidth: 345 }} className="card1">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./assets/img-3.jpg"
                      alt="green iguana"
                      className="zoom"
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="h1"
                      >
                        BUR. Create Protfolio React Template
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="p"
                      >
                        Website / Creative
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </SwiperSlide>
              <div className=" flex justify-center btn">
                <span
                  className="ico "
                  onClick={() => swiperRef.current.slidePrev()}
                >
                  <ArrowBackIcon />
                </span>
                <span
                  className="ico"
                  onClick={() => swiperRef.current.slideNext()}
                >
                  <ArrowForwardIcon />
                </span>
              </div>
            </Swiper>
          </div>
        </div>
        <Destopapp />
        <Price />
      </div>
    </>
  );
};

export default Portfolio;

import "../App.css";
import Paper from "@mui/material/Paper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ width: "20rem" }}>
          <center>
            <Paper
              style={{
                display: "flex",
                alignItems: "flex-start",

                width: "20rem",
                height: "20rem",
                backgroundImage: `url(https://paulieworld.s3.amazonaws.com/after+one.jpg)`,
              }}
              elevation={3}
              square
            >
              <div className="gOne">
                <h1>Before</h1>
              </div>
            </Paper>
          </center>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <center>
            <Paper
              style={{
                display: "flex",
                alignItems: "flex-start",

                width: "20rem",
                height: "20rem",
                backgroundImage: `url(https://paulieworld.s3.amazonaws.com/before+one.jpg)`,
              }}
              elevation={3}
              square
            >
              <div className="gTwo">
                <h1>After</h1>
              </div>
            </Paper>
          </center>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <Paper
            style={{
              display: "flex",
              alignItems: "flex-start",

              width: "20rem",
              height: "20rem",
              backgroundImage: `url(https://paulieworld.s3.amazonaws.com/before+two.jpg)`,
            }}
            elevation={3}
            square
          >
            <div className="gThree">
              <h1>Before</h1>
            </div>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <Paper
            style={{
              display: "flex",
              alignItems: "flex-start",

              width: "20rem",
              height: "20rem",
              backgroundImage: `url(https://paulieworld.s3.amazonaws.com/after+two.jpg)`,
            }}
            elevation={3}
            square
          >
            <div className="gFour">
              <h1>After</h1>
            </div>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <Paper
            style={{
              display: "flex",
              alignItems: "flex-start",

              width: "20rem",
              height: "20rem",
              backgroundSize: "cover",
              backgroundImage: `url(https://paulieworld.s3.amazonaws.com/before+three.jpg)`,
            }}
            elevation={3}
            square
          >
            <div className="gFive">
              <h1>Before</h1>
            </div>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <Paper
            style={{
              display: "flex",
              alignItems: "flex-start",

              width: "20rem",
              height: "20rem",
              backgroundSize: "cover",
              backgroundImage: `url(https://paulieworld.s3.amazonaws.com/after+three.jpg)`,
            }}
            elevation={3}
            square
          >
            <div className="gSix">
              <h1>After</h1>
            </div>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <Paper
            style={{
              display: "flex",
              alignItems: "flex-start",

              width: "20rem",
              height: "20rem",
              backgroundSize: "cover",
              backgroundImage: `url(https://paulieworld.s3.amazonaws.com/before+four.jpg)`,
            }}
            elevation={3}
            square
          >
            <div className="gSeven">
              <h1>Before</h1>
            </div>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ width: "20rem" }}>
          <Paper
            style={{
              display: "flex",
              alignItems: "flex-start",

              width: "20rem",
              height: "20rem",
              backgroundSize: "cover",
              backgroundImage: `url(https://paulieworld.s3.amazonaws.com/after+four.jpg)`,
            }}
            elevation={3}
            square
          >
            <div className="gEight">
              <h1>After</h1>
            </div>
          </Paper>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallery;

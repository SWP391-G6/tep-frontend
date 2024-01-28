// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Box, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles: any = makeStyles({
  container: {
    position: "relative",
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "&:hover $text": {
      opacity: 1,
    },
  },
  text: {
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.75s ease-in-out",
    width: "100%",
    backgroundColor: "#00adb37d",
    height: "50px",
    bottom: 0,
  },
});

const TopDestinationCarousel = () => {
  const classes = useStyles();
  return (
    <>
      <Swiper
        style={{ marginTop: "10px" }}
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "300px" }}>
          <Paper
            elevation={5}
            sx={{
              backgroundImage: `url("https://i.ibb.co/tCM5MJs/sapa.webp")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "lightgray",
            }}
          >
            <Box className={classes.container}>
              <Box className={classes.text} sx={{ textAlign: "left" }}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ marginLeft: "10px" }}
                >
                  Sapa
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <Paper
            elevation={5}
            sx={{
              backgroundImage: `url("https://i.ibb.co/VNtFNpK/halongbay.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "lightgray",
            }}
          >
            <Box className={classes.container}>
              <Box className={classes.text} sx={{ textAlign: "left" }}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ marginLeft: "10px" }}
                >
                  Ha Long Bay
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <Paper
            elevation={5}
            sx={{
              backgroundImage: `url("https://i.ibb.co/XZKgmH5/phuquoc.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "lightgray",
            }}
          >
            <Box className={classes.container}>
              <Box className={classes.text} sx={{ textAlign: "left" }}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ marginLeft: "10px" }}
                >
                  Phu Quoc Island
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <Paper
            elevation={5}
            sx={{
              backgroundImage: `url("https://i.ibb.co/S5M7XFq/hanoi.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "lightgray",
            }}
          >
            <Box className={classes.container}>
              <Box className={classes.text} sx={{ textAlign: "left" }}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ marginLeft: "10px" }}
                >
                  Ha Noi Capital
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <Paper
            elevation={5}
            sx={{
              backgroundImage: `url("https://i.ibb.co/dmMFS84/danang.webp")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "lightgray",
            }}
          >
            <Box className={classes.container}>
              <Box className={classes.text} sx={{ textAlign: "left" }}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ marginLeft: "10px" }}
                >
                  Da Nang City
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SwiperSlide>
        <SwiperSlide style={{ height: "300px" }}>
          <Paper
            elevation={5}
            sx={{
              backgroundImage: `url("https://i.ibb.co/RynDt2d/hcmc.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "lightgray",
            }}
          >
            <Box className={classes.container}>
              <Box className={classes.text} sx={{ textAlign: "left" }}>
                <Typography
                  fontWeight={700}
                  color="white"
                  sx={{ marginLeft: "10px" }}
                >
                  Ho Chi Minh City
                </Typography>
              </Box>
            </Box>
          </Paper>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopDestinationCarousel;

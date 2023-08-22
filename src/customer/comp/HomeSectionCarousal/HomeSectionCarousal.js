import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeCard from "../HomeCard/HomeCard";
import Button from "@mui/material/Button";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";

const HomeSectionCarousal = ({ sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: {
      items: 1,
    },
    720: {
      items: 3,
    },
    1024: {
      items: 5.5,
    },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  const syncAtiveIndex = ({ item }) => setActiveIndex(item);

  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <HomeCard />);
  return (
    <div className=" px-4 lg:px-8  ">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5 border ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          autoPlayInterval={1000}
          onSlideChange={syncAtiveIndex}
          activeIndex={activeIndex}
        />

        <Button
          onClick={slideNext}
          variant="contained"
          className="z-50 "
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
            color: "black",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>

        <Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 "
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
            color: "black",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftOutlinedIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousal;

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarousaldata } from "../MainCarousalData";
import "./MainCarousal.scss";

const MainCarousal = () => {
  const items = MainCarousaldata.map((item) => (
    <img className="carousal_img" src={item.image} alt="" role="presentation" />
  ));
  return (
    <div className="-z-10">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousal;

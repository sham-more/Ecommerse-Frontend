import React from "react";
import MainCarousal from "../comp/HomeCarousal/MainCarousal/MainCarousal";
import HomeSectionCarousal from "../comp/HomeSectionCarousal/HomeSectionCarousal";

const Home = () => {
  return (
    <div>
      <MainCarousal />
      <div className=" space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousal sectionName={"Men's Kurta"} />
        <HomeSectionCarousal sectionName={"Men's Shoes"} />
        <HomeSectionCarousal sectionName={"Men's Shirt"} />
        <HomeSectionCarousal sectionName={"Women's Saree"} />
        <HomeSectionCarousal sectionName={"Women's Dress"} />
      </div>
    </div>
  );
};

export default Home;

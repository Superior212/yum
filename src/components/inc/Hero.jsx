import React from "react";
import TextImg from "../../assets/images/image53.png";
import NavBar from "../../components/NavBar/NavBar";
import FoodSlider from "./FoodSlider/FoodSlider";

const Hero = () => {
  return (
    <div className="__hero_background">
      <NavBar />
      <div className="md:pt-[5rem] py-6 md:px-0 px-2 text-center">
        <h1 className="__young_serif flex justify-center items-center md:text-5xl text-[1.4rem] text-white">
          Discover & order fr
          <img src={TextImg} alt="" className="md:w-10 w-3" />m the best
        </h1>
        <h1 className="__young_serif flex justify-center items-center md:text-5xl text-[1.4rem] text-white">
          restaurants at your convenience.
        </h1>
      </div>
      <FoodSlider />
    </div>
  );
};

export default Hero;

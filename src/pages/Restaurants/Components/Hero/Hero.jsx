import React from "react";
import retaurantGroup from "../../assets/images/retaurantGroup.png";

const Hero = () => {
  return (
    <div className="relative">
        <div className="text-white  py-10 custom-clip-path bg-[#00674B] pb-[28rem] z-10">
      <div className="flex  items-center">
        <div className="p-5 mx-6 w-1/2">
          <h2 className="rounded-[32px] border border-[#474949] shadow-md p-4 w-fit">
            Join Our Network of Restaurants
          </h2>

          <h1 className="text-[50px]">
            Expand Your Reach, Serve More Customers
          </h1>

          <div className="flex gap-x-6 items-center ">
            <button className="bg-[#EFFFFB] px-4 py-2 text-[#FCBF65] rounded-[25px]">
              Register
            </button>
            <button className="bg-[#FE9801] px-4 py-2 text-[#EFFFFB] rounded-[25px]">
              Log in
            </button>
          </div>
        </div>

        <div className="mx-10 w-1/2">
          <img src={retaurantGroup} className="w-[33rem]" alt="" />
        </div>
      </div>

    </div>
    </div>
  );
};

export default Hero;

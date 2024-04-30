import React from "react";
import earn from "../../assets/images/earnImg.png";

const Earn = () => {
  return (
    <div className="bg-[#00381D] mt-[800p]md:mt-[520px] relative">
      <div className="flex md:gap-x-5 flex-col md:flex-row gap-y-4  absolute right-[29%]  md:right-[39%] md:top-44 top-[42%]  ">
        <button className="bg-[#FFFFFF80]  rounded-3xl border px-5 py-3 ">
          Earn as a Rider
        </button>
        <button className="bg-white  rounded-3xl border py-3 px-5 ">
          Earn as a Vendor
        </button>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4 text-center">
          <h1 className="text-[#F49200] text-center pt-[3rem] text-[30px]">
            Earn With Yumdash
          </h1>
        </div>

        <div className="w-full md:flex items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img src={earn} className="w-full md:w-[38rem]" alt="" />
          </div>

          <div className="w-full md:w-1/2 flex items-center flex-col justify-center">
            <div className="w-[80%] md:w-[60%] flex items-start justify-start flex-col gap-y-5 text-center md:text-left">
              <h1 className="text-[#F49200] text-[28px]">
                Create your E-restaurant with ease.
              </h1>
              <p className="text-white text-[18px]">
                Create a free online presence for your business, reach more
                customers, make more sales, and enjoy the ease of operating a
                digital restaurant.
              </p>
              <button className=" mx-[4rem] p-3 border rounded-3xl bg-[#F49200] text-white border-[#F49200] text-[16px]">
                Join Our Vendors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;

import React from "react";
import PartnerFeatures from "./PartnerFeatures";

const Partner = () => {
  return (
   <div className="relative">
     <div className="rotated-clip-path bg-[#FEEACD] absolute top-[-470px] md:top-[-400px] text-[#032C21] w-full pb-20">
         <div className="hidden md:absolute md:right-[150px] top-[40px] z-20">
            <div className="rounded-[200px] w-[100px] h-[100px] px-4 py-4  text-white bg-[#F49200] flex flex-col gap-y-3 items-center justify-center">
                <h2 className="font-thin text-[14px]">JOIN US</h2>
                <p>TODAY</p>
            </div>
        </div>
      <div className="md:pt-60 pt-80 md:flex md:items-center md:justify-center flex-col z-20">
        <h1 className="text-[30px] mx-8 md:mx-0 md:text-[50px]">Why partner with us?</h1>
        <p className="mx-10 md:mx-0 md:w-[21rem]">
          We are dedicated to helping your restaurant thrive in a competitive
          industry. Explore the reasons why joining our platform is a recipe for
          success.
        </p>
      </div>
     <div className="">
     <PartnerFeatures />
     </div>
    </div>
   </div>
  );
};

export default Partner;

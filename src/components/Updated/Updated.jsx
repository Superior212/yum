import React from "react";
import arrow from "../../assets/icons/arrow-left.png";
import flower from "../../assets/images/flower.png";
import flowerRight from "../../assets/images/flower-right.png";

const Updated = () => {
  return (
    <div className="bg-light">
      <div className="flex items-center justify-center flex-col pb-[4rem]">
        <div className="bg-[#004834] w-[90%] flex items-center justify-center flex-col p-28 relative rounded-b-[30px] ">
          <h1 className="text-[#EBFFF9] text-[30px]">
            Stay updated for Exciting Updates!
          </h1>
          <p className="text-[#EBFFF9] font-arOneSans text-[16px] w-[40%] py-8">
            for mouthwatering news, delicious deals, and exclusive offers? Join
            our newsletter to satisfy your cravings. Be the first to know about
            our featured restaurants, special promotions, and tasty surprises.
          </p>
          <form
            action=""
            className="bg-[#FFF] font-arOneSans w-96 rounded-[35px] py-2 px-2 flex justify-between">
            <input
              type="text"
              className="border-0 outline-none p-2"
              placeholder="Enter email address"
            />
            <div className="bg-[#FE9801] rounded-[20px] h-10 w-10 flex items-center justify-center">
              <img src={arrow} alt="" />
            </div>
          </form>
       <div className="absolute left-[-0.3rem] top-[19.8rem]">
       <img src={flower}  className="w-60"alt="" />
       </div>
       <div className="absolute right-[-0.2rem] top-[19.8rem]">
       <img src={flowerRight}  className="w-60"alt="" />
       </div>
        </div>
      </div>
    </div>
  );
};

export default Updated;

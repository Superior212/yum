import React from "react";
import line from "../../assets/images/line.png";
import Accordion from "../Accordion/Accordion";

const Faqs = () => {
  return (
    <div className="bg-secondary p-10">
      <div className="flex items-center justify-center gap-x-2">
        <img src={line} alt="" />
        <h1 className="text-center text-[#FF5791] text-[20px]">FAQs</h1>
        <img src={line} alt="" />
      </div>
      <div className="text-light flex items-center justify-center flex-col py-5">
        <h2 className="text-[45px]">Your Questions, Answered.</h2>
        <p className="py-4 text-[20px]">
          Find the answer to your questions below
        </p>
      </div>
      <div>
        <Accordion />
      </div>
    </div>
  );
};

export default Faqs;

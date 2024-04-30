import React from "react";
import vector1 from "../../assets/images/vector 12.png";
import vector2 from "../../assets/images/vector 13.png";
import footerLogo from "../../assets/images/footerLogo.png";
import appleLogo from "../../assets/icons/appleLogo.png";
import andriodlogo from "../../assets/icons/andriodlogo.png";
import chevron from "../../assets/icons/chevron-down.png";

const Footer = () => {
  return (
    <div className="bg-[#FCE3B0] h-[28rem] relative">
      <img src={vector1} className="absolute top-0 right-0 w-[30rem] " alt="" />
      <div className="flex items-center justify-center pt-10">
        <div className="bg-[#191104] text-white relative z-10 w-[90%] p-4 rounded-t-[30px]">
          <div className="flex pb-6">
            <div>
              <div className="w-56">
                <img src={footerLogo} className="pb-7" alt="" />
                <p className="text-[16px]">
                  Satisfy Your Cravings With Just A Tap!
                </p>
              </div>
              <div className="my-4 flex  gap-x-3  font-arOneSans text-[11px]">
                <button className="flex items-center rounded-[2rem] gap-x-2 justify-center bg-[#00674B] py-2 px-3">
                  <img src={appleLogo} alt="" />
                  <span className="pt-1"> Download on Appstore</span>
                </button>
                <button className="flex items-center rounded-[2rem] gap-x-2 justify-center bg-transparent border py-2 px-3">
                  <img src={andriodlogo} alt="" />
                  <span className="">Download on Googleplay</span>
                </button>
              </div>
            </div>
            <div className="mx-10">
              <h1>Company</h1>
              <ul className=" font-arOneSans my-1">
                <li className="my-1">Blogs</li>
                <li className="my-1">Rider</li>
                <li className="my-1">Restaurants</li>
                <li className="my-1">FAQs</li>
                <li className="my-1">Delivery areas</li>
                <li className="my-1">Career</li>
              </ul>
            </div>
            <div className="mx-10">
              <h1>About Us</h1>
              <ul className=" font-arOneSans my-1">
                <li className="my-1">Terms of service</li>
                <li className="my-1">Privacy policy</li>
                <li className="my-1">Cookies</li>
                <li className="my-1">Legal</li>
              </ul>
            </div>
            <div className="mx-10">
              <h1>Areas</h1>
              <ul className=" font-arOneSans my-1">
                <li className="my-1">Abia</li>
                <li className="my-1">Anambra</li>
                <li className="my-1">Ebonyi</li>
                <li className="my-1">
                  Imo{" "}
                  <span className="rounded-xl text-[12px] text-[#43FDCB] bg-[#E6FEF81A] px-2 ">
                    Active
                  </span>
                </li>
                <li className="my-1">Enugu</li>
              </ul>
            </div>
            <div className="mx-10">
              <h1>Need help</h1>
              <ul className=" font-arOneSans my-1">
                <li className="my-1">Contact Us</li>
                <li className="my-1">Help center</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="p-7 flex  justify-between">
            <p className="font-arOneSans text-[14px]">
              2023 All Rights Reserved. 2022, Yumdash Inc.
            </p>

            <div className="font-arOneSans text-[12px] flex  gap-x-4">
              <p className="underline">FACEBOOK</p>
              <p className="underline">INSTAGRAM</p>
              <p className="underline">TWITTER</p>
            </div>

            <div className="font-arOneSans">
              <button className="text-[12px] flex items-center border rounded-xl px-3 py-1">
                <span>ENGLISH</span>
                <img src={chevron} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        src={vector2}
        className="absolute bottom-0 left-0 w-[30rem]"
        alt=""
      />
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";
import YumDash from "../../assets/images/Group12.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Mobile */}
      <nav className="md:hidden bg-[#EFFFFB] p-2 flex items-center justify-between py-4 px-2 w-full md:rounded-bl-[50px] md:rounded-br-[50px]">
        <Link className="text-white font-bold" to="/">
          <img src={YumDash} alt="" />
        </Link>
        <div>
          <HiMenuAlt4
            className="h-8 w-8 text-black cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>

      {/* Desktop */}
      <nav className="hidden md:flex bg-[#EFFFFB] mx-auto p-2 items-center justify-between py-4 px-[3rem] w-[78rem] rounded-bl-[50px] rounded-br-[50px]">
        <Link className="text-white font-bold" to="/">
          <img src={YumDash} alt="" />
        </Link>
        <div>
          <Link className="md:text-black text-white mx-6" to="/">
            About us
          </Link>
          <select className="bg-transparent border-none outline-none font-bold mx-0">
            <option className="bg-[#f5e6bd]" value="Customer">
              Customer
            </option>
            <option className="bg-[#f5e6bd]" value="Vendors">
              Vendors
            </option>
            <option className="bg-[#f5e6bd]" value="Riders">
              Riders
            </option>
          </select>
          <Link className="md:text-black text-white mx-6" to="/">
            Blogs
          </Link>
          <Link className="md:text-black text-white mx-6" to="/">
            FAQs
          </Link>
          <Link className="md:text-black text-white mx-6" to="/">
            Contacts
          </Link>
        </div>
        <div className="flex gap-x-8">
          <button className="font-bold p-2 w-[9rem] text-[#FE9801] border border-[#FE9801] md:rounded-full">
            Register
          </button>
          <button className="font-bold p-2 w-[9rem] text-white bg-[#fe9801] md:rounded-full">
            Log in
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-start space-y-5 blue-glassmorphism w-full h-screen z-20 absolute top-0 left-0 pt-20">
            <Link className="nav__Links mx-5" to="/">
              About us
            </Link>
            <select className="bg-transparent font-bold mx-2 text-white">
              <option className="bg-[#f5e6bd] text-black" value="Customer">
                Customer
              </option>
              <option className="bg-[#f5e6bd] text-black" value="Vendors">
                Vendors
              </option>
              <option className="bg-[#f5e6bd] text-black" value="Riders">
                Riders
              </option>
            </select>
            <Link className="md:text-black text-white  mx-5" to="/">
              Blogs
            </Link>
            <Link className="md:text-black text-white  mx-5" to="/">
              FAQs
            </Link>
            <Link className="md:text-black text-white mx-5" to="/">
              Contacts
            </Link>
            <div className="flex gap-x-12">
              <button className="font-bold text-white __nav_button">
                Register
              </button>
              <button className="font-bold text-white __nav_button">
                Order Now
              </button>
            </div>
            <div
              onClick={toggleMenu}
              className="w-10 h-10 rounded-full cursor-pointer absolute top-0 right-3 flex items-center justify-center border-2 border-[#00674B]"
            >
              <AiOutlineClose className="h-8 w-8 text-black cursor-pointer" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

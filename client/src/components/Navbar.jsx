import React, { useState } from "react";
import logo from "../assets/logo/logo_64x64.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose, MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { INTERVIEW_ROUTE, MAIN_ROUTE } from "../utils/consts";

const Navbar = () => {
  // handling mobile nav with useState
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navigate = useNavigate();

  const handleNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  // hide mobile nav
  const handleMobileNavElementsClick = (route) => {
    if (showMobileNav) {
      setShowMobileNav(!showMobileNav);
    }
    navigate(route);
  };
  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div
          onClick={() => navigate(MAIN_ROUTE)}
          className="flex items-center gap-4 cursor-pointer"
        >
          <img src={logo} alt="logo" />
          <h2 className="text-2xl md:text-3xl uppercase hidden lg:block">
            Train By Brain
          </h2>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <li
              onClick={() => navigate(MAIN_ROUTE)}
              className="text-xl md:text-2xl hover:bg-black rounded-full hover:text-white py-2 px-6 duration-200 cursor-pointer"
            >
              Questions
            </li>
            <li
              onClick={() => navigate(INTERVIEW_ROUTE)}
              className="text-xl md:text-2xl hover:bg-black rounded-full hover:text-white py-2 px-6 duration-200 cursor-pointer"
            >
              Interviews
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <RxHamburgerMenu
            size={35}
            onClick={handleNav}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* mobile nav */}

      {showMobileNav && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-white">
          <div className="relative p-2">
            <div className="flex items-center justify-center mb-8">
              <img src={logo} alt="logo" />
            </div>
            <div className="absolute top-0 right-0 cursor-pointer">
              <MdOutlineClose size={35} onClick={handleNav} />
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <div
                  onClick={() => handleMobileNavElementsClick(MAIN_ROUTE)}
                  className="flex items-center justify-between hover:bg-black rounded-full hover:text-white duration-200 py-2 px-6 cursor-pointer"
                >
                  <li className="text-3xl">Questions</li>
                  <MdArrowForwardIos size={25} />
                </div>
                <div
                  onClick={() => handleMobileNavElementsClick(INTERVIEW_ROUTE)}
                  className="flex items-center justify-between hover:bg-black rounded-full hover:text-white duration-200 py-2 px-6 cursor-pointer"
                >
                  <li className="text-3xl">Interviews</li>
                  <MdArrowForwardIos size={25} />
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

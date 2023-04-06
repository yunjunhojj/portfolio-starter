import React from "react";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 
        rounded-full max-w-[460px] mx-auto px-5 justify-between items-center flex text-2x1 text-whith/50"
        >
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            to="home"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
            offset={-200}
          >
            <BiHomeAlt />
          </Link>
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            to="about"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <BiUser />
          </Link>

          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            to="services"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <BsClipboardData />
          </Link>
          {/* <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            to="work"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <BsBriefcase />
          </Link> */}
          <Link
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center "
            to="contact"
            spy={true}
            activeClass="active"
            smooth={true}
            duration={500}
          >
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

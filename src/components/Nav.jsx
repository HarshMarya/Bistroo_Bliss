import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import logo from "../assets/Images/logo.svg";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import bodyImg from "../assets/Images/body.svg"

function Nav() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(false)
  return (
    <header>
      <nav className="">
        <div className="top hidden sm:flex justify-around text-white bg-[#474747] py-2">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <IoCallOutline />
              (414) 857 - 0107
            </div>
            <div className="flex gap-2 items-center">
              <CiMail />
              yummy@bistrobliss
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-[#5c5c5c] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
              <FaTwitter />
            </div>
            <div className="bg-[#5c5c5c] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
              <FaFacebook />
            </div>
            <div className="bg-[#5c5c5c] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-[#5c5c5c] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
              <FaGithub />
            </div>
          </div>
        </div>

        {/* mobile navbar*/}
        <div
          className={`${
            nav ? "w-full text-center my-2 " : "hidden transition-all"
          }`}
        >
          <ul className="flex justify-center items-center flex-col">
            <li
              className="flex justify-end items-end w-full px-4 text-2xl text-[#AD343E] cursor-pointer"
              onClick={() => setNav(!nav)}
            >
              <IoCloseSharp />
            </li>
            <li className="hover:border-b-2 border-[#AD343E] px-10 py-1 w-fit font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-[#AD343E] px-10 py-1 w-fit font-semibold">
              <Link to="/about-us">About</Link>
            </li>
            <li className="hover:border-b-2 border-[#AD343E] px-10 py-1 w-fit font-semibold">
              <Link to="/our-menu">Menu</Link>
            </li>
            <li className="hover:border-b-2 border-[#AD343E] px-10 py-1 w-fit font-semibold">
              <Link to="/blog-page">Blog</Link>
            </li>
            <li className="hover:border-b-2 border-[#AD343E] px-10 py-1 w-fit font-semibold">
              <Link to="/contact-us">Contact</Link>
            </li>
            <li className="px-10 py-2 rounded-3xl my-2 font-semibold bg-[#AD343E] text-white">
              <Link to="/book-a-table">Book A Table</Link>
            </li>
          </ul>
        </div>

        <div className={`${nav ? "hidden" : "flex justify-between items-center px-10 py-4"}`}>
          <div>
            <Link
              to="/"
              className="playfair-display text-xl md:text-2xl flex items-center md:gap-2"
            >
              <img src={logo} className="w-[40px] md:w-fit" />
              <span className="md:text-3xl lg:text-5xl text-[#474747] drop-shadow-xl italic">
                Bistro Bliss
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-6 font-semibold lg:text-lg">
              <li className={`${active}`}><Link to="/">Home</Link></li>
              <li className={`${active}`}><Link to="/about-us">About</Link></li>
              <li className={`${active}`}><Link to="/our-menu">Menu</Link></li>
              <li className={`${active}`}><Link to="/blog-page">Blog</Link></li>
              <li className={`${active}`}><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>

          <div className="hidden md:block border-[2px] border-black px-6 py-2 rounded-3xl hover:bg-[#AD343E] hover:border-[#AD343E] font-semibold hover:text-white ">
            <Link to='/book-a-table'>Book A Table</Link>
          </div>

          {/* mobile navbar button*/}
          <div
            className="text-3xl cursor-pointer block md:hidden text-[#AD343E]"
            onClick={() => setNav(!nav)}
          >
            <HiBars3BottomRight />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

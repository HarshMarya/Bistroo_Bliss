import React from "react";
import logo from "../assets/Images/footer.svg";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import fries from "../assets/Images/fries3.svg";
import pancake from "../assets/Images/pencake.svg";
import omelate from "../assets/Images/omlate.svg";
import chilli from "../assets/Images/chilli.svg";

function Footer() {
    const newDate = new Date()
    const year = newDate.getFullYear()
  return (
    <>
      <footer className="bg-[#474747] text-white">
        <div className="p-4 md:p-20 mx-auto w-10/12 flex justify-between flex-wrap">
          {/* Left section */}
          <div>
            <div>
              {/* logo */}
              <Link
                to="/"
                className="playfair-display text-xl md:text-2xl flex items-center md:gap-2"
              >
                <img src={logo} className="w-[40px] md:w-fit" />
                <span className="md:text-3xl lg:text-5xl drop-shadow-xl italic">
                  Bistro Bliss
                </span>
              </Link>
              <div className="my-8">
                <p>
                  In the new era of technology we look a in the future
                </p>
                <p>with certainty and pride to for our company and.</p>
              </div>
            </div>
            {/* social links */}
            <div className="flex gap-4">
              <div className="bg-[#AD343E] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
                <FaTwitter />
              </div>
              <div className="bg-[#AD343E] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
                <FaFacebook />
              </div>
              <div className="bg-[#AD343E] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
                <FaInstagram />
              </div>
              <div className="bg-[#AD343E] p-2 rounded-full hover:text-[#474747] hover:bg-white cursor-pointer">
                <FaGithub />
              </div>
            </div>
          </div>
          {/* Links center section */}
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-xl mb-4">Utility pages</p>
            <Link to="/">Home</Link>
            <Link to="/about-us">About</Link>
            <Link to="/our-menu">Menu</Link>
            <Link to="/blog-page">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          {/* Right section */}
          <div className="w-1/3">
            <p className="font-semibold text-xl mb-4">Follow Us On Instagram</p>
            <div className="flex flex-wrap gap-4">
              <img src={fries} alt="" className="rounded-xl" />
              <img src={omelate} alt="" className="rounded-xl" />
              <img src={pancake} alt="" className="rounded-xl" />
              <img src={chilli} alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
        <div className="text-center py-4">Copyright © {year}. All Rights Reserved</div>
      </footer>
    </>
  );
}

export default Footer;

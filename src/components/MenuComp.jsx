import React from "react";
import cup from "../assets/Images/tea.svg";
import cake from "../assets/Images/cake.svg";
import glass from "../assets/Images/glass.svg";
import bowl from "../assets/Images/bowl.svg";
import party from "../assets/Images/party.svg";
import catering from "../assets/Images/catering.svg";
import wedding from "../assets/Images/wedding.svg";
import birthday from "../assets/Images/birthday.svg";
import chef from "../assets/Images/chef.jpg";
import kabab from "../assets/Images/kabab.svg";
import curry from "../assets/Images/curry.svg";
import { Link } from "react-router-dom";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineReceiptLong } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import AboutComp from "./AboutComp";

const cardData = [
  {
    img: cup,
    content: "Breakfast",
    Des: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
  {
    img: bowl,
    content: "Main Dishes",
    Des: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
  {
    img: glass,
    content: "Drinks",
    Des: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
  {
    img: cake,
    content: "Desserts",
    Des: "In the new era of technology we look in the future with certainty and pride for our life.",
    link: "Explore Menu",
  },
];

function MenuComp() {
  return (
    <>
      {/* browse menu section  */}
      <section className="relative p-4 md:p-10 lg:p-6 xl:p-20 md:w-full">
        <p className="text-center text-5xl leading-[58px] playfair-display mb-4 md:mb-10 ">
          Browse Our Menu
        </p>
        <div className="flex gap-4 justify-center items-start flex-wrap">
          {cardData.map((v, i) => {
            return (
              <div
                className="border-[1px] border-gray-200 rounded-lg w-10/12 sm:w-[280px] sm:h-[320px] flex flex-col justify-start items-center p-6 gap-4 text-center shadow-lg"
                key={i}
              >
                <div className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] bg-[#f2f3f0] rounded-full p-4 sm:p-6 ">
                  <img src={v.img} alt="" className="w-full text-[#AD343E]" />
                </div>
                <p className="text-2xl font-semibold">{v.content}</p>
                <p>{v.Des}</p>
                <Link
                  to="/our-menu"
                  className="text-[#AD343E] font-bold md:font-semibold hover:underline"
                >
                  {v.link}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      {/* about section component */}
      <AboutComp />
      {/* offer services section */}
      <section className="p-4 md:p-6 xl:p-20 mx-auto w-10/12">
        <p className="text-5xl playfair-display mb-10 w-full lg:w-8/12">
          We also offer unique services for your events
        </p>
        <div className="flex items-center justify-center gap-4 justify-items-center flex-wrap">
          <div className="w-full md:w-[260px] lg:w-[220px]">
            <img src={catering} alt="" />
            <p className="text-xl font-semibold my-2">Catering</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="w-full md:w-[260px] lg:w-[220px] ">
            <img src={birthday} alt="" />
            <p className="text-xl font-semibold my-2">Birthday</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="w-full md:w-[260px] lg:w-[220px] ">
            <img src={wedding} alt="" />
            <p className="text-xl font-semibold my-2">Wedding</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="w-full md:w-[260px] lg:w-[220px]">
            <img src={party} alt="" />
            <p className="text-xl font-semibold my-2">Events</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
        </div>
      </section>
      {/* fast food delivery */}
      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-10 xl:p-20 mx-auto w-10/12">
          <div className="flex justify-between flex-wrap-reverse">
            {/* image Contaienr */}
            <div className="flex gap-2 md:gap-6 flex-wrap justify-center">
              <div className="w-fit md:w-10/12 lg:w-[550px] 2xl:w-[400px]">
                <img src={chef} alt="" className="rounded-xl" />
              </div>
              <div className="md:my-6 hidden xl:block">
                <img src={curry} alt="" className="my-4"  />
                <img src={kabab} alt="" />
              </div>
            </div>

            {/* Text Contaienr */}
            <div className="w-full 2xl:w-1/3 flex flex-col justify-center gap-6 my-4">
              <p className="text-5xl playfair-display">
                Fastest Food Delivery in City
              </p>
              <p>
                Our visual designer lets you quickly and of drag a down your way
                to customapps for both keep desktop.{" "}
              </p>
              <div>
                <div className="flex items-center gap-2 my-4 font-semibold text-xl">
                  <div className="bg-[#AD343E] p-2 rounded-full">
                    <BsClockHistory className="text-white" />
                  </div>
                  <p>Delivery within 30 minutes</p>
                </div>
                <div className="flex items-center gap-2 my-4 font-semibold text-xl">
                  <div className="bg-[#AD343E] p-2 rounded-full">
                    <MdOutlineReceiptLong className="text-white" />
                  </div>
                  <p>Best Offer & Prices</p>
                </div>
                <div className="flex items-center gap-2 my-4 font-semibold text-xl">
                  <div className="bg-[#AD343E] p-2 rounded-full">
                    <IoCartOutline className="text-white" />
                  </div>
                  <p>Online Services Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuComp;

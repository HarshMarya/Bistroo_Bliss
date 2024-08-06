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

function MenuComp() {
  return (
    <>
      <section className="relative p-4 md:p-20 mx-auto w-10/12">
        <p className="text-center text-[60px] playfair-display mb-10">
          Browse Our Menu
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          {/* card-1 */}
          <div className="border-[1px] border-gray-200 rounded-lg w-[300px] h-[350px] flex flex-col justify-center items-center p-10 gap-4">
            <div className="w-[100px] h-[100px] bg-[#f2f3f0] rounded-full p-6">
              <img src={cup} alt="" className="w-full" />
            </div>
            <p className="text-2xl font-semibold">Breakfast</p>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link
              to="/our-menu"
              className="text-[#AD343E] font-semibold hover:underline"
            >
              Explore Menu
            </Link>
          </div>
          {/* card-2 */}
          <div className="border-[1px] border-gray-200 rounded-lg w-[300px] h-[350px] flex flex-col justify-center items-center p-10 gap-4">
            <div className="w-[100px] h-[100px] bg-[#f2f3f0] rounded-full p-6">
              <img src={bowl} alt="" className="w-full" />
            </div>
            <p className="text-2xl font-semibold">Main Dishes</p>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link
              to="/our-menu"
              className="text-[#AD343E] font-semibold hover:underline"
            >
              Explore Menu
            </Link>
          </div>
          {/* card-3 */}
          <div className="border-[1px] border-gray-200 rounded-lg w-[300px] h-[350px] flex flex-col justify-center items-center p-10 gap-4 ">
            <div className="w-[100px] h-[100px] bg-[#f2f3f0] rounded-full p-7">
              <img src={glass} alt="" className="w-full" />
            </div>
            <p className="text-2xl font-semibold">Drinks</p>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link
              to="/our-menu"
              className="text-[#AD343E] font-semibold hover:underline"
            >
              Explore Menu
            </Link>
          </div>
          {/* card-4 */}
          <div className="border-[1px] border-gray-200 rounded-lg w-[300px] h-[350px] flex flex-col justify-center items-center p-10 gap-4">
            <div className="w-[100px] h-[100px] bg-[#f2f3f0] rounded-full p-6">
              <img src={cake} alt="" className="w-full" />
            </div>
            <p className="text-2xl font-semibold">Desert</p>
            <p>
              In the new era of technology we look in the future with certainty
              and pride for our life.
            </p>
            <Link
              to="/our-menu"
              className="text-[#AD343E] font-semibold hover:underline"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="p-4 md:p-20 mx-auto w-10/12">
        <p className="text-5xl playfair-display mb-10 w-full md:w-5/12">
          We also offer unique services for your events
        </p>
        <div className="flex justify-center items-center md:justify-between gap-4 flex-wrap">
          <div className="w-[300px]">
            <img src={catering} alt="" />
            <p className="text-xl font-semibold my-2">Catering</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="w-[300px]">
            <img src={birthday} alt="" className="rounded-xl" />
            <p className="text-xl font-semibold my-2">Birthday</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="w-[300px]">
            <img src={wedding} alt="" className="rounded-xl" />
            <p className="text-xl font-semibold my-2">Wedding</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
          <div className="w-[300px]">
            <img src={party} alt="" className="rounded-xl" />
            <p className="text-xl font-semibold my-2">Events</p>
            <p>
              In the new era of technology we look in the future with certainty
              for life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-20 mx-auto w-10/12">
          <div className="flex justify-between flex-wrap">
            <div className="flex gap-2 md:gap-6 flex-wrap">
              <div className="w-[300px] md:w-[400px] ">
                <img src={chef} alt="" className="rounded-xl" />
              </div>
              <div className="md:my-6">
                <img src={curry} alt="" className="my-4" />
                <img src={kabab} alt="" />
              </div>
            </div>
            <div className="w-ful md:w-1/3 flex flex-col justify-center gap-6">
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

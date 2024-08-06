import React from "react";
import { FaPlay } from "react-icons/fa";
import menu from "../assets/Images/menu.svg";
import timer from "../assets/Images/timer.svg";
import Icon from "../assets/Images/Icon.svg";

function Center() {
  return (
    <>
      <section>
        <div className="bg-centerBG h-screen w-full bg-no-repeat bg-contain">
          <div className="flex justify-center items-center flex-col">
            <div className="group bg-white rounded-full w-[100px] h-[100px] text-[#AD343E] flex justify-center items-center cursor-pointer hover:text-2xl">
              <FaPlay />
            </div>
            <p className="playfair-display text-5xl text-white">
              Feel the authentic & original taste from us
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-4 w-8/12 mx-auto ">
            <div className="flex justify-center gap-4">
              <img src={menu} alt="" />
              <div>
                <p className="font-semibold text-xl">Multi Cuisine</p>
                <p>
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <img src={Icon} alt="" />
              <div>
                <p className="font-semibold text-xl">Easy To Order</p>
                <p>
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <img src={timer} alt="" />
              <div>
                <p className="font-semibold text-xl">Fast Delivery</p>
                <p>
                  In the new era of technology we look in the future with
                  certainty life.
                </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Center;

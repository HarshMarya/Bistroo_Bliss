import React from "react";
import { FaPlay } from "react-icons/fa";
import menu from "../assets/Images/menu.svg";
import timer from "../assets/Images/timer.svg";
import Icon from "../assets/Images/Icon.svg";
import centerBg from "../assets/Images/BG.svg";

function Center() {
  return (
    <>
      {/* <section>
        <div className="bg-centerBG h-full w-full bg-no-repeat bg-contain">
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
      </section> */}

      <section>
        <div className="relative">
          <img src={centerBg} alt="" className="w-full" />
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center flex-col text-center">
            <div className="group bg-white rounded-full w-[50px] h-[50px] md:w-[100px] md:h-[100px] text-[#AD343E] flex justify-center items-center cursor-pointer hover:text-2xl">
              <FaPlay />
            </div>
            <p className="playfair-display text-xl md:text-5xl text-white md:my-4">
              Feel the authentic &
            </p>
            <p className="playfair-display text-xl md:text-5xl text-white">
              original taste from us
            </p>
          </div>
        </div>
        {/* Mini cards below video container */}
        <div className="grid md:grid-cols-3 gap-6 mx-auto my-4 flex-wrap p-4">
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

import React from "react";
import urban from "../assets/Images/urban_eats.svg";
import instcart from "../assets/Images/instcart.svg";
import postmates from "../assets/Images/postmates.svg";
import foodpanda from "../assets/Images/foodpanda.svg";
import didifood from "../assets/Images/didifood.svg";
import deliveroo from "../assets/Images/deliveroo.svg";
import doordash from "../assets/Images/doordash.svg";

const images = [
  urban,
  instcart,
  postmates,
  foodpanda,
  didifood,
  deliveroo,
  doordash,
];

function Companies() {
  return (
    <>
      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-20 mx-auto w-10/12 flex">
          <div>
            <p className="text-5xl playfair-display my-4">
              You can order through apps
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper.
            </p>
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {images.map((v, i) => {
              return (
                <div className="bg-white rounded-lg p-4 m-4" key={i}>
                  <img src={v} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Companies;

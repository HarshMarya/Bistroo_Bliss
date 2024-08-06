import React from "react";
import { Link } from "react-router-dom";
import catering from "../assets/Images/catering.svg";
import f1 from "../assets/Images/f1.svg";
import f2 from "../assets/Images/f2.svg";
import f3 from "../assets/Images/f3.svg";
import f4 from "../assets/Images/f4.svg";
import f5 from "../assets/Images/f5.svg";
import f6 from "../assets/Images/f6.svg";
import f7 from "../assets/Images/f7.svg";
import f8 from "../assets/Images/f8.svg";
import Companies from "../components/Companies";

const cards = [
  {
    img: f1,
    price: "$ 9.99",
    dish: "Fried Eggs",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f2,
    price: "$ 15.99",
    dish: "Hawaiian Pizza",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f3,
    price: "$ 7.25",
    dish: "Martinez Cocktail",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f4,
    price: "$ 20.99",
    dish: "Butterscottch Cake",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f5,
    price: "$ 5.89",
    dish: "mint Lemonade",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f6,
    price: "$ 18.60",
    dish: "Chocolate Icecream",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f7,
    price: "$ 9.99",
    dish: "Cheese Burger",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
  {
    img: f8,
    price: "$ 9.99",
    dish: "Classic Waffles",
    des: "Made with eggs, lettuce, salt, oil and other ingredients.",
  },
];

function Menu() {
  return (
    <>
      <section>
        <div className="p-4 md:p-20 mx-auto w-10/12 text-center">
          <p className="text-[96px] playfair-display font-normal">Our Menu</p>
          <p>We consider all the drivers of change gives you the components </p>
          <p>you need to change to create a truly happens.</p>
        </div>
        {/* Buttons */}
        <div className="text-center font-semibold">
          <button className="active border-[1px] py-4 px-16 border-black rounded-full mx-2">
            <Link to="">All</Link>
          </button>
          <button className="border-[1px] py-4 px-16 border-[#DBDFD0] rounded-full mx-2">
            <Link to="">Breakfast</Link>
          </button>
          <button className="border-[1px] py-4 px-16 border-[#DBDFD0] rounded-full mx-2">
            <Link to="">Main Dishes</Link>
          </button>

          <button className="border-[1px] py-4 px-16 border-[#DBDFD0] rounded-full mx-2">
            <Link to="">Drinks</Link>
          </button>

          <button className="border-[1px] py-4 px-16 border-[#DBDFD0] rounded-full mx-2">
            <Link to="">Desserts</Link>
          </button>
        </div>
        {/* Dishes cards */}
        <div className="flex flex-wrap justify-center w-10/12 mx-auto gap-8 my-10">
          {cards.map((v, i) => {
            return (
              <div
                className="w-[300px] border-[1px] border-[#DBDFD0] rounded-xl text-center"
                key={i}
              >
                <img src={v.img} alt="" className="rounded-t-xl" />
                <div className="p-4">
                  <p className="playfair-display text-[#AD343E] text-3xl">
                    {v.price}
                  </p>
                  <p className="text-xl font-semibold my-2">{v.dish}</p>
                  <p>{v.des}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Companies/>
      </section>
    </>
  );
}

export default Menu;

import React from "react";
import d1 from "../assets/Images/d1.svg";
import d2 from "../assets/Images/d2.svg";
import d3 from "../assets/Images/d3.svg";
import d4 from "../assets/Images/d4.svg";
import d5 from "../assets/Images/d5.svg";
import d6 from "../assets/Images/d6.svg";
import d7 from "../assets/Images/d7.svg";
import d8 from "../assets/Images/d8.svg";
import d9 from "../assets/Images/d9.svg";
import d10 from "../assets/Images/d10.svg";
import d11 from "../assets/Images/d11.svg";
import { Link } from "react-router-dom";

const cardImages = [
  {
    img: d1,
    des: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
  },
  {
    img: d2,
    des: "Exclusive baking lessons from the pastry king",
    date: "January 3, 2023",
  },
  {
    img: d3,
    des: "How to prepare the perfect fries in an air fryer",
    date: "January 3, 2023",
  },
  {
    img: d4,
    des: "How to prepare delicious chicken tenders",
    date: "January 3, 2023",
  },
  {
    img: d5,
    des: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
  },
  {
    img: d6,
    des: "The secret tips & tricks to prepare a perfect burger",
    date: "January 3, 2023",
  },
  {
    img: d7,
    des: "7 delicious cheesecake recipes you can prepare",
    date: "January 3, 2023",
  },
  {
    img: d8,
    des: "5 great pizza restaurants you should visit this city",
    date: "January 3, 2023",
  },
  {
    img: d9,
    des: "5 great cooking gadgets you can buy to save time",
    date: "January 3, 2023",
  },
  {
    img: d10,
    des: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
  },
  {
    img: d11,
    des: "Top 20 simple and quick desserts for kids",
    date: "January 3, 2023",
  },
  {
    img: d11,
    des: "Top 20 simple and quick desserts for kids",
    date: "January 3, 2023",
  },
];

function FoodCard() {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center w-full mt-10">
        {cardImages.map((val, ind) => {
          return (
            <Link to="/page1">
              <div
                className="w-[300px] rounded-xl shadow-xl bg-white"
                key={ind}
              >
                <img
                  src={val.img}
                  alt=""
                  className="rounded-t-xl hover:scale-105 transition-all"
                  loading="lazy"
                />
                <div className="flex flex-col gap-1 p-6">
                  <p className="font-semibold text-[#737865]">{val.date}</p>
                  <p className="font-semibold text-xl">{val.des}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default FoodCard;

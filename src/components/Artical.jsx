import React from "react";
import { Link } from "react-router-dom";
import burger from "../assets/Images/burger.svg";
import fries from "../assets/Images/fries2.svg";
import cupcake from "../assets/Images/cupcake.svg";
import pizza from "../assets/Images/pizza.svg";
import wings from "../assets/Images/wings.svg";

const cards = [
  {
    img: fries,
    date: "January 3, 2024",
    content: "How to prepare the perfect french fries in an air fryer",
  },
  {
    img: cupcake,
    date: "January 3, 2024",
    content: "7 delicious cheesecake recipes you can prepare",
  },
  {
    img: pizza,
    date: "January 3, 2024",
    content: "5 great pizza restaurants you should visit this city",
  },
  {
    img: wings,
    date: "January 3, 2024",
    content: "How to prepare delicious chicken tenders",
  },
];

function Artical() {
  return (
    <>
      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-20 mx-auto w-10/12">
          <div className="flex justify-between mb-10">
            <p className="text-5xl playfair-display">Our Blog & Articles</p>
            <Link
              to="/blog-page"
              className="p-4 rounded-full bg-[#AD343E] text-white"
            >
              Read all Articles
            </Link>
          </div>
          {/* cards */}
          <div className="flex justify-between gap-10">
            {/* card-1 */}
            <div className="w-[800px] rounded-xl shadow-xl bg-white">
              <img src={burger} alt="" className="hover:scale-105 transition-all" />
              <div className="flex flex-col gap-4 p-6">
                <p className="font-semibold text-[#737865]">January 3, 2023</p>
                <p className="font-semibold text-xl">
                  The secret tips & tricks to prepare a perfect burger & pizza
                  for our customers
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur of a adipiscing
                  elitilmim semper adipiscing massa gravida nisi cras enim quis
                  nibholm varius amet gravida ut facilisis neque egestas.
                </p>
              </div>
            </div>
            {/* 4-cards */}
            <div className="flex flex-wrap gap-10 justify-center w-full">
              {cards.map((val, ind) => {
                return (
                  <div className="w-[300px] rounded-xl shadow-xl bg-white" key={ind}>
                    <img src={val.img} alt="" className="rounded-t-xl hover:scale-105 transition-all" />
                    <div className="flex flex-col gap-1 p-6">
                      <p className="font-semibold text-[#737865]">{val.date}</p>
                      <p className="font-semibold text-xl">{val.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Artical;

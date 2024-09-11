import React from "react";
import FoodCard from "../components/FoodCard.jsx"

function Blog() {
  return (
    <>
      <section className="p-2 md:p-10 mx-auto w-10/12">
        <div className="text-center">
          <p className="text-[60px] md:text-[90px] playfair-display">Our Blog & Articles</p>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
        <FoodCard/>
      </section>
    </>
  );
}

export default Blog;

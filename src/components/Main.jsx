import React from "react";
import { Link } from 'react-router-dom'

function Main() {
  return (
    <>
      <main className="bg-bodyImg w-full h-screen bg-no-repeat bg-contain xl:bg-cover ">
        <div className="text-center w-1/3 mx-auto">
          <h1 className="md:text-[90px] playfair-display">Best food for your taste</h1>
          <p className="my-4">
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <div className="flex gap-4 font-semibold justify-center">
          <div className="border-[2px] bg-[#AD343E] text-white border-[#AD343E] md:py-4 px-8 rounded-full cursor-pointer">
            <Link to='/book-a-table'>Book A table</Link>
          </div>
          <div className="border-[2px] border-black py-4 px-8 rounded-full cursor-pointer">
            <Link to='/our-menu'>Explore Menu</Link>
          </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;

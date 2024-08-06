import React from "react";
import chef from "../assets/Images/chef-2.svg";

function InfoComp() {
  return (
    <>
      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-20 mx-auto w-10/12 flex">
          {/* left container */}
          <div className="w-1/2 mx-auto">
            <p className="text-5xl playfair-display my-4">A little information for our valuable guest</p>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className="flex gap-4 flex-wrap my-10">
              <div className="bg-white w-[300px] h-[150px] flex justify-center items-center flex-col gap-4 rounded-lg">
                <p className="text-5xl playfair-display">3 </p>
                <p>Location</p>
              </div>
              <div className="bg-white w-[300px] h-[150px] flex justify-center items-center flex-col gap-4 rounded-lg">
                <p className="text-5xl playfair-display">1995 </p>
                <p>Founded</p>
              </div>
              <div className="bg-white w-[300px] h-[150px] flex justify-center items-center flex-col gap-4 rounded-lg">
                <p className="text-5xl playfair-display">60+ </p>
                <p>Staff Members</p>
              </div>
              <div className="bg-white w-[300px] h-[150px] flex justify-center items-center flex-col gap-4 rounded-lg">
                <p className="text-5xl playfair-display">100%</p>
                <p>Satisfied Customers</p>
              </div>
            </div>
          </div>
          {/* Right container */}
          <div>
            <img src={chef} alt="" className="rounded-xl" />
          </div>
        </div>
      </section>
    </>
  );
}

export default InfoComp;

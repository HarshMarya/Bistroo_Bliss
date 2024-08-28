import React from "react";
import img1 from "../assets/Images/face1.svg";
import img2 from "../assets/Images/face2.svg";
import img3 from "../assets/Images/face3.svg";

const data = [
  {
    comment: `“The best restaurant”`,
    desp: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    img: img1,
    name: "Sophire Robson",
    loc: "Los Angeles, CA",
  },
  {
    comment: `“Simply delicious”`,
    desp: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    img: img2,
    name: "Matt Cannon",
    loc: "San Diego, CA",
  },
  {
    comment: `“One of a kind restaurant”`,
    desp: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    img: img3,
    name: "Andy Smith",
    loc: "San Francisco, CA",
  },
];

function Testimonial() {
  return (
    <>
      <section className="p-4 md:p-10 xl:p-20 mx-auto w-10/12">
        <p className="text-5xl playfair-display text-center mb-10">
          What Our Customers Say
        </p>
        <div className="flex justify-center gap-10 flex-wrap">
          {data.map((v, i) => {
            return (
              <div className="bg-[#f9f9f7] w-[400px] p-6 flex flex-col gap-4 rounded-xl shadow-lg" key={i}>
                <p className="text-[#AD343E] text-2xl font-semibold">
                  {v.comment}
                </p>
                <p>{v.desp}</p>
                <hr className="bg-[#DBDFD0] h-[2px] w-10/12 mx-auto" />
                <div className="flex gap-4 items-center my-4">
                  <img src={v.img} alt="" />
                  <div>
                    <p className="font-bold">{v.name}</p>
                    <p>{v.loc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Testimonial;

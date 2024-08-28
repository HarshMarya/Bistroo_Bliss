import React from 'react'
import roll from "../assets/Images/roll.svg";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function AboutComp() {
  return (
    <>
          <section className="bg-[#f9f9f7]">
        <div className="flex justify-between p-4 md:p-10 xl:p-20 mx-auto w-10/12 flex-wrap-reverse">
        {/* Image container */}
          <div className="relative my-10">
            <img src={roll} className='w-fit md:w-full'/>
            <div className="bg-[#474747] w-fit h-fit my-2 rounded-lg md:absolute -right-20 -bottom-10 text-white p-4 md:p-6 flex flex-col gap-4">
              <p className="font-semibold text-2xl my-2">Comes and visit us</p>
              <div className="flex gap-4">
                <IoCallOutline className='txet-xl' />
                <p>(414) 857 - 0107</p>
              </div>
              <div className="flex gap-4">
                <IoLocationOutline className='txet-xl' />
                <p>happytummy@restaurant.com</p>
              </div>
              <div className="flex gap-4">
                <IoMailOutline className='txet-xl' />
                <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
              </div>
            </div>
          </div>
          {/* Text Container */}
          <div className="w-full xl:w-5/12 flex flex-col gap-4 md:gap-6 justify-center items-center md:items-start">
            <p className="text-5xl playfair-display leading-[58px] text-center md:text-left">
              We provide healthy food for your family.
            </p>
            <p className="font-semibold text-lg text-center md:text-left">
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </p>
            <p className='text-center md:text-left'>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>
            <div className=" border-[1px] border-[#474747] font-semibold p-4 rounded-full w-fit cursor-pointer hover:bg-[#474747] hover:text-white">
              <Link to="/about-us" >More About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutComp
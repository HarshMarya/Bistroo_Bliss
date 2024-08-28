import React from 'react'
import { FaArrowUp } from "react-icons/fa";



function GoToTop() {
    const topBtn = () =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
  return (
    <div className='fixed bottom-6 right-6' >
        <div onClick={topBtn} className='bg-[#AD343E] w-[50px] h-[50px] md:w-[50px] md:h-[50px] rounded-full shadow-xl flex items-center justify-center cursor-pointer my-2'>
        <FaArrowUp className='text-xl animate-btn text-white'/>
        </div>
    </div>
  )
}

export default GoToTop
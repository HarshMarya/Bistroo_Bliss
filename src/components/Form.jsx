import React from "react";

function Form() {
  return (
    <>
      <form action="get" className="my-4 bg-white rounded-xl p-4 md:p-10 w-full md:w-10/12 mx-auto shadow-xl">
        {/* name and email */}
        <div className=" flex gap-2 md:gap-8 flex-wrap md:flex-nowrap">

          {/* Name Input */}
          <div className="w-full md:w-1/2">
            <p className="font-semibold my-2">Name:</p>
            <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
          {/* Email Input */}
            <p className="font-semibold my-2">Email:</p>
            <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Enter email address"
              />
            </div>
          </div>
        </div>
        {/* Subject */}
        <div className="my-4 md:my-8">
          <p className="font-semibold my-2">Subject:</p>
          <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
            <input
              type="text"
              className="outline-none w-full"
              placeholder="Write your subject"
            />
          </div>
        </div>
        {/* Message */}
        <div className="my-4 md:my-8">
          <p className="font-semibold my-2">Message:</p>
          <div className="border-[1px] border-[#DBDFD0] rounded-xl px-4 py-3">
            {/* <input type="text" className="outline-none w-full" placeholder="Enter Your Name" /> */}
            <textarea
              placeholder="Write your message"
              className="w-full p-1 outline-none"
            ></textarea>
          </div>
        </div>
        <button type="button" className="bg-[#AD343E] text-white w-full p-3 rounded-full font-bold">Send</button>
      </form>
    </>
  );
}

export default Form;

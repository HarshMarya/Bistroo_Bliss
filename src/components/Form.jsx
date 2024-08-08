import React from "react";

function Form() {
  return (
    <>
      <form action="get" className="bg-white rounded-xl p-10 w-9/12 mx-auto shadow-xl">
        {/* name and email */}
        <div className=" flex gap-8">
          <div className="w-1/2">
            <p className="font-semibold my-2">Name:</p>
            <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
              <input
                type="text"
                className="outline-none w-full"
                placeholder="Enter your name"
              />
            </div>
          </div>
          <div className="w-1/2">
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
        <div className="my-8">
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
        <div className="my-8">
          <p className="font-semibold my-2">Message:</p>
          <div className="border-[1px] border-[#DBDFD0] rounded-xl px-4 py-3">
            {/* <input type="text" className="outline-none w-full" placeholder="Enter Your Name" /> */}
            <textarea
              placeholder="Write your message"
              className="w-full p-2 outline-none"
            ></textarea>
          </div>
        </div>
        <button type="button" className="bg-[#AD343E] text-white w-full p-3 rounded-full font-bold">Send</button>
      </form>
    </>
  );
}

export default Form;

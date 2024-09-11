import React from "react";

function TableForm() {
  return (
    <>
      <form
        action="get"
        className="my-4 bg-white rounded-xl p-4 md:p-6 w-full lg:w-10/12 mx-auto shadow-xl"
      >
        {/* date and time */}
        <div className=" flex gap-2 md:gap-8 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/2">
            <p className="font-semibold my-2">Date:</p>
            <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
              <input
                type="date"
                className="outline-none w-full placeholder:uppercase"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="font-semibold my-2">Time:</p>
            <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
              <input type="time" className="outline-none w-full" />
            </div>
          </div>
        </div>
        {/* Subject */}
        <div className=" flex gap-2 md:gap-8 flex-wrap md:flex-nowrap">
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
            <p className="font-semibold my-2">Number:</p>
            <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
              <input
                type="number"
                className="outline-none w-full appearance-none"
                placeholder="xxxxx-xxxxx"
                min={10}
              />
            </div>
          </div>
        </div>
        {/* Person */}
        <div className="my-4 md:my-8">
          <p className="font-semibold my-2">Total person:</p>
          <div className="border-[1px] border-[#DBDFD0] rounded-full px-4 py-3">
            <input
              type="number"
              className="outline-none w-full"
              placeholder="1 Person"
              min={1}
              max={10}
            />
          </div>
        </div>
        <button
          type="button"
          className="bg-[#AD343E] text-white w-full p-3 rounded-full font-bold"
        >
          Book A Table
        </button>
      </form>
    </>
  );
}

export default TableForm;

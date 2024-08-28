import React from "react";
import map from "../assets/Images/map.svg";
import TableForm from "../components/TableForm";

function BookTable() {
  return (
    <>
      <section className="bg-[#F9F9F7]">
        <div className="p-4 md:p-20 mx-auto w-10/12">
          <div className="text-center">
            <h1 className="md:text-[90px] playfair-display">Book A Table</h1>
            <p>
            We consider all the drivers of change gives you the components you need to change to create a truly happens.
            </p>
          </div>
          <TableForm />
        </div>
      </section>
    </>
  );
}

export default BookTable;

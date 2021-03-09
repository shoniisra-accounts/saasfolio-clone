import React from "react";

const TestimonialPerson = ({ title, imageURL }) => (
  <div className="flex items-center mt-8 mx-auto w-64 md:w-96">
    <img className="rounded-full w-8 h-8 md:mr-4" src={imageURL} />
    <div className="font-semibold text-md w-56 md:w-80">{title}</div>
  </div>
);

export default TestimonialPerson;

import React from "react";

const TestimonialPerson = ({ title, imageURL }) => (
  <div className="flex justify-between mt-8">
    <img className="rounded-full w-8 h-8" src={imageURL} />
    <div className="font-semibold text-md">{title}</div>
  </div>
);

export default TestimonialPerson;

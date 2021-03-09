import React from "react";

const BenefitCard = ({ title, subTitle, imageURL }) => (
  <div className="my-12 flex-col items-evenly">
    <div className="w-1/2 mx-auto">
      <img className="w-full h-full" src={imageURL} />
    </div>
    <div className="text-xl font-medium">{title}</div>
    <div className="text-md text-gray-500">{subTitle}</div>
  </div>
);

export default BenefitCard;

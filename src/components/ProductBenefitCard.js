import React from "react";

const ProductBenefitCard = ({ title, subTitle, imageURL }) => (
  <div className="text-center my-4 flex-col justify-between">
    <div className="w-8 h-8 mx-auto my-2">
      <img className="w-full" src={imageURL} />
    </div>
    <div>
      <div className="text-lg text-gray-800 font-extrabold">{title}</div>
      <div className="text-lg text-gray-800">{subTitle}</div>
    </div>
  </div>
);

export default ProductBenefitCard;

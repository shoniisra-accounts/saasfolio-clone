import React from "react";
import ListItem from "./ListItem";
import CustomButton from "./CustomButton";

const PriceCard = ({ details }) => (
  <div
    className={`text-center border border-gray-200 rounded-md px-8 ${
      !details.isPopular && "py-10"
    }  my-4`}
  >
    {details.isPopular && (
      <div className="bg-green-200 inline-block px-2 py-1 mb-6">
        <span className="text-green-800 text-xs font-semibold">
          MOST POPULAR
        </span>
      </div>
    )}
    <div className="text-lg font-semibold">{details.name}</div>
    <div className="font-medium flex justify-center items-start">
      <span className="text-xl mt-2">$</span>
      <span className="text-6xl">{details.price}</span>
    </div>
    <div className="text-md text-gray-500">Billed per month</div>
    <div className="text-lg text-gray-500 my-10">{details.description}</div>
    <div>
      {details.features.length > 0 &&
        details.features.map((feature) => <ListItem title={feature} />)}
    </div>

    {details.isPopular ? (
      <CustomButton
        classes="mt-8 mb-2"
        color="bg-yellow-400 border-yellow-600"
        medium
        title="Start free trial now"
      />
    ) : (
      <CustomButton
        classes="mt-8 mb-2"
        color="border-gray-400"
        medium
        title="Start free trial now"
      />
    )}
  </div>
);

export default PriceCard;

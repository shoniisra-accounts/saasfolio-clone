import React from "react";
import Layout from "../../Layout";
import PriceCard from "../PriceCard";

const Pricing = () => {
  const pricingDetails = [
    {
      id: 1,
      name: "Standard",
      price: 19,
      description: "Explain biggest difference of this plan here",
      features: [
        "Most important feature",
        "Another important features",
        "Next feature here",
        "Another, less important feature",
        "Last feature here",
      ],
      isPopular: false,
    },
    {
      id: 2,
      name: "Premium",
      price: 29,
      description: "This is the plan you want to sell most",
      features: [
        "All features from Standard",
        "Most important feature",
        "Another important features",
        "Next feature here",
        "Another, less important feature",
        "Last feature here",
      ],
      isPopular: true,
    },
    {
      id: 3,
      name: "Decoy",
      price: 99,
      description:
        "Make this plan super expensive, so your middle plan looks cheaper",
      features: [
        "Most important feature",
        "Another important features",
        "Next feature here",
        "Another, less important feature",
        "Last feature here",
      ],
      isPopular: false,
    },
  ];
  return (
    <div className="py-16 text-center">
      <Layout>
        <div className="font-extrabold text-3xl leading-normal my-4">
          How much is a high converting landing page worth to you?
        </div>
        <div className="text-gray-500 text-xl my-4">
          Choose between this pricing block, or end the page with a CTA Block as
          shown below. Choose either one.
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-start">
          {pricingDetails.length > 0 &&
            pricingDetails.map((pricingDetail) => (
              <PriceCard details={pricingDetail} />
            ))}
        </div>
      </Layout>
    </div>
  );
};

export default Pricing;

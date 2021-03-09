import React from "react";
import Layout from "../../Layout";
import CustomButton from "../CustomButton";
const CTA = () => (
  <div className="bg-blue-100 w-full py-16 text-center">
    <Layout>
      <div className="my-12 flex flex-col items-start lg:flex-row lg:items-center">
        <div className="w-24 mx-auto lg:ml-auto lg:mr-0 ">
          <img
            className="w-full h-full"
            src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-try.png"
          />
        </div>
        <div className="mx-auto lg:ml-8">
          <div className="text-xl font-medium">
            Risk Reduction: Try SaaSer 14 days for free
          </div>
          <div className="text-md text-gray-500">
            This a in between CTA for visitors that already got convinced.
          </div>
        </div>
      </div>
      {/* <BenefitCard
        title="Risk Reduction: Try SaaSer 14 days for free"
        subTitle="This a in between CTA for visitors that already got convinced."
        imageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-try.png"
      /> */}
      <CustomButton
        classes="text-white"
        color="bg-green-500 border-green-600"
        medium
        title="Clear CTA Text"
      />
    </Layout>
  </div>
);

export default CTA;

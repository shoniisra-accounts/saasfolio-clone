import React from "react";
import Layout from "../../Layout";
import BenefitCard from "../BenefitCard";
import CustomButton from "../CustomButton";
const CTA = () => (
  <div className="bg-blue-100 w-full py-16 text-center">
    <Layout>
      <BenefitCard
        title="Risk Reduction: Try SaaSer 14 days for free"
        subTitle="This a in between CTA for visitors that already got convinced."
        imageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-try.png"
      />
      <CustomButton
        classes="text-white"
        color="bg-green-500 border-green-600"
        medium
        title="Clear CTA Text"
      />
      {/* <div className="w-1/2">
        <img
          className="w-full"
          src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-try.png"
        />
      </div>
      <div className="text-xl font-medium">Risk Reduction: Try SaaSer 14 days for free</div>
      <div>This a in between CTA for visitors that already got convinced.</div>
      <div>
        <a>Clear CTA Text</a>
      </div> */}
    </Layout>
  </div>
);

export default CTA;

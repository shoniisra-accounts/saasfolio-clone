import React from "react";
import Layout from "../../Layout";
import Companies from "../Companies";
import CustomButton from "../CustomButton";

const Hero = () => (
  <Layout>
    <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-normal mt-32 mb-6 max-w-4xl mx-auto lg:mb-16 text-center">
      Clear headline that explains your products main benefit
    </div>
    <div className="text-xl lg:text-2xl leading-tight text-gray-600 text-center">
      Explain your unique solution in short and how it solves a problem your
      customer has.
    </div>
    <CustomButton
      classes="mt-8 mb-2"
      color="bg-yellow-400 border-yellow-600"
      big
      title="Clear CTA Text"
    />
    <div className="text-sm text-gray-600 text-center">
      Reduce Risk: 14 Day Trial
    </div>

    <div className="flex justify-between relative w-4/5 mx-auto my-10">
      <img
        className="w-2/5 md:1/2"
        src="https://www.landingkit.com/templates/saasfolio/tailwind/img/hero-drawing-popcorn.png"
      />
      <img
        className="w-2/5 md:1/2"
        src="https://www.landingkit.com/templates/saasfolio/tailwind/img/hero-drawing-mail.png"
      />
      {/* <div className="absolute bg-hero-popcorn inset-0 w-full h-full object-cover object-center"></div> */}
    </div>

    <Companies />
  </Layout>
);

export default Hero;

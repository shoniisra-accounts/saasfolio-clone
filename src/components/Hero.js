import React from "react";
import Layout from "../Layout";

const Hero = () => (
  <Layout>
    <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight md:leading-normal mt-32 mb-6 max-w-4xl mx-auto lg:mb-16 text-center">
      Clear headline that explains your products main benefit
    </div>
    <div className="text-xl lg:text-2xl leading-tight text-gray-600 text-center">
      Explain your unique solution in short and how it solves a problem your
      customer has.
    </div>
    <div className="mt-8 mb-2 flex justify-center">
      <a className="text-xl font-medium bg-yellow-400 border-2 border-yellow-600 px-6 py-2 rounded-md">
        Clear CTA Text
      </a>
    </div>
    <div className="text-sm text-gray-600 text-center">
      Reduce Risk: 14 Day Trial
    </div>

    <div className="relative w-64 h-64">
      <div className="absolute bg-hero-popcorn inset-0 w-full h-full object-cover object-center"></div>
    </div>

    <div className="text-md font-semibold text-center mb-6">
      Join 1,000+ software businesses who use SaasFolio daily
    </div>
    <div className="flex justify-center mb-6">
      <ul className="max-w-3xl flex">
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-1.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-2.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-3.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-4.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-5.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-6.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-7.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-8.png" />
        </li>
        <li className="w-10 mx-3">
          <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logos/logo-9.png" />
        </li>
      </ul>
    </div>
  </Layout>
);

export default Hero;

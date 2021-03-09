import React from "react";
import Layout from "../../Layout";
import CustomButton from "../CustomButton";

const Footer = () => (
  <Layout>
    <div className="py-8 flex flex-col items-center lg:flex-row lg:justify-between">
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="w-32 mx-auto lg:ml-0 lg:mr-2 xl:mr-4 py-4">
          <img
            className="w-full"
            src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logo.png"
          />
        </div>
        <div className="text-gray-500 text-md text-center">
          A Landingfolio Template, Copyright © 2021
        </div>
      </div>
      <div className="flex justify-evenly text-gray-600 my-4">
        <div className="mx-1 xl:mx-2 xl:mx-2">Home</div>
        <div className="mx-1 xl:mx-2">Features</div>
        <div className="mx-1 xl:mx-2">Pricing</div>
        <div className="hidden lg:inline mx-1 xl:mx-2">Login</div>
        <CustomButton
          classes="text-black hidden lg:inline mx-1 xl:mx-2"
          color="bg-yellow-400 border-yellow-600"
          medium
          title="Signup for free"
        />
      </div>
    </div>
  </Layout>
);

export default Footer;

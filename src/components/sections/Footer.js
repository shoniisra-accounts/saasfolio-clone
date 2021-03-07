import React from "react";

const Footer = () => (
  <div className="py-8">
    <div className="w-2/5 mx-auto py-4">
      <img
        className="w-full"
        src="https://www.landingkit.com/templates/saasfolio/tailwind/img/logo.png"
      />
    </div>
    <div className="text-gray-500 text-md text-center">
      A Landingfolio Template, Copyright © 2021
    </div>
    <div className="flex justify-evenly text-gray-600 my-4">
      <div>Home</div>
      <div>Features</div>
      <div>Pricing</div>
    </div>
  </div>
);

export default Footer;

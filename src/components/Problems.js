import React from "react";
import Layout from "../Layout";
import BenefitCardContainer from "./BenefitCardContainer";

const Problems = () => (
  <div className="bg-blue-100 w-full py-16 text-center">
    <Layout>
      <div className="font-semibold text-2xl my-4">
        Headline that discribes how your product solves a problem your customer
        has
      </div>
      <div className="text-gray-600 text-lg">
        Start by defining the pain your customer has right now, for example;
        clients not paying their invoices. Than write how your solution solves
        this problem for your customers.
      </div>

      <BenefitCardContainer />
      <div className="text-lg text-gray-600">
        “Powerfull and relevant testimonial of Customer X. This content should
        focus on the result the product had for this customer or answer a doubt
        your potential customer could have. "
      </div>

      <div className="flex justify-between mt-8">
        <img
          className="rounded-full w-8 h-8"
          src="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
        />
        <div className="font-semibold text-md">
          Customer Name, CEO of Company Name
        </div>
      </div>
    </Layout>
  </div>
);

export default Problems;

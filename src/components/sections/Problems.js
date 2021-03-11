import React from "react";
import Layout from "../../Layout";
import BenefitCardContainer from "../BenefitCardContainer";
import TestimonialDetails from "../TestimonialDetails";

const Problems = () => (
  <div className="bg-custom-blue w-full py-16 text-center">
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
      <TestimonialDetails
        personName="Customer Name, CEO of Company Name"
        personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
        content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
      />
    </Layout>
  </div>
);

export default Problems;

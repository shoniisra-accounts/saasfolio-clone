import React from "react";
import TestimonialDetails from "../TestimonialDetails";
import Layout from "../../Layout";
import Companies from "../Companies";
const Testimonials = () => (
  <div className="my-16 text-center">
    <Layout>
      <div className="font-bold text-2xl my-8 text-center">
        Over 1,000 customers trust SaaSer with their business. See what they
        say.
      </div>
      <div>
        <TestimonialDetails
          personName="Customer Name, CEO of Company Name"
          personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
          content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
        />
        <TestimonialDetails
          personName="Customer Name, CEO of Company Name"
          personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
          content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
        />

        <div className="w-4/5 mx-auto my-8">
          <img
            className="w-full"
            src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-friends.png"
          />
        </div>
        <TestimonialDetails
          personName="Customer Name, CEO of Company Name"
          personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
          content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
        />
        <TestimonialDetails
          personName="Customer Name, CEO of Company Name"
          personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
          content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
        />
      </div>
      <div className="my-6">
        <Companies />
      </div>
    </Layout>
  </div>
);

export default Testimonials;

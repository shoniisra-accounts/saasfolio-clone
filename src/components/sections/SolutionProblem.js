import React from "react";
import Layout from "../../Layout";
import CustomButton from "../CustomButton";
import TestimonialDetails from "../TestimonialDetails";

const SolutionProblem = () => (
  <div className="bg-yellow-100 py-20">
    <Layout>
      <div className="w-3/5 mx-auto">
        <img
          className="w-full"
          src="https://www.landingkit.com/templates/saasfolio/tailwind/img/features-drawing-moonlanding.png"
        />
      </div>
      <div className="text-center">
        <div className="font-bold text-2xl my-2">
          Or, ask if your visitor wants to solve problem X today
        </div>
        <div className="text-md text-gray-700">
          Explain how your solution will solve this problem and ask them to
          start a free trial, or any other low-key CTA they could take.
        </div>
        <div className="flex justify-between mt-8">
          <CustomButton
            classes="text-black"
            color="bg-yellow-400 border-yellow-600"
            small
            title="Clear CTA Text"
          />
          <CustomButton
            classes="text-gray-700"
            color="bg-transparemt border-gray-700"
            small
            title="View Pricing"
          />
        </div>
        <div className="text-sm text-gray-600 text-center mt-2 my-6">
          Reduce Risk: 14 Day Trial
        </div>
        <TestimonialDetails
          personName="Customer Name, CEO of Company Name"
          personImageURL="https://www.landingkit.com/templates/saasfolio/tailwind/img/avatar/avatar-1.png"
          content="Powerfull and relevant testimonial of Customer X. This content should
      focus on the result the product had for this customer or answer a doubt
      your potential customer could have."
        />
      </div>
    </Layout>
  </div>
);

export default SolutionProblem;

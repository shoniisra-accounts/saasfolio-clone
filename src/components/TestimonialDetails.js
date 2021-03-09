import React from "react";
import TestimonialPerson from "./TestimonialPerson";

const TestimonialDetails = ({ personName, personImageURL, content }) => (
  <div className="mx-4">
    <div className="text-lg text-gray-600">“{content}"</div>

    <TestimonialPerson title={personName} imageURL={personImageURL} />
  </div>
);

export default TestimonialDetails;

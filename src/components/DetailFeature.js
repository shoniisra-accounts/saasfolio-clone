import React from "react";
import ListItem from "./ListItem";

const DetailFeature = ({ right }) => (
  <div className={`${right ? "flex-col-reverse" : "flex-col"}`}>
    <div className="my-8">
      <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/features-drawing-moonlanding.png" />
    </div>
    <div>
      <div className="text-2xl font-medium">
        Now go deeper into what your product offers. But, word it as benefits,
        not as features.
      </div>
      <div className="text-md text-gray-600 py-4">
        “Save your favorites links” is a feature. “Never lose your favorite
        websites again” is a benefit. Users don’t care about your product, they
        only care about what’s in it for them.
      </div>
      <ListItem title="Summarize the content above" />
      <ListItem title="For visitors that don't like to read" />
      <ListItem title="And just scan the page" />
    </div>
  </div>
);

export default DetailFeature;

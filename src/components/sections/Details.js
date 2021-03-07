import React from "react";
import Layout from "../../Layout";
import DetailFeature from "../DetailFeature";

const Details = () => (
  <div className="my-16">
    <Layout>
      <DetailFeature />
      <DetailFeature right />
      <DetailFeature />

      {/* <div className="my-8">
        <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/features-drawing-moonlanding.png" />
      </div>
      <div>
        <div className="text-2xl font-medium">
          Now go deeper into what your product offers. But, word it as benefits,
          not as features.
        </div>
        <div className="text-md text-gray-600 py-4">
          “Save your favorites links” is a feature. “Never lose your favorite
          websites again” is a benefit. Users don’t care about your product,
          they only care about what’s in it for them.
        </div>
        <div className="flex items-center">
          <div className="w-6 mr-4">
            <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/check.png" />
          </div>
          <div className="text-md text-gray-700">
            Summarize the content above
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-6 mr-4">
            <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/check.png" />
          </div>
          <div className="text-md text-gray-700">
            For visitors that don't like to read
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-6 mr-4">
            <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/check.png" />
          </div>
          <div className="text-md text-gray-700">And just scan the page</div>
        </div>
      </div> */}
    </Layout>
  </div>
);

export default Details;

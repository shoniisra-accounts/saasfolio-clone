import React from "react";

const ListItem = ({ title }) => (
  <div className="flex items-center">
    <div className="w-6 mr-4">
      <img src="https://www.landingkit.com/templates/saasfolio/tailwind/img/check.png" />
    </div>
    <div className="text-md lg:text-lg text-gray-700">{title}</div>
  </div>
);

export default ListItem;

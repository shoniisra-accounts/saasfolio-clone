import React from "react";

const CustomButton = ({ classes, color, big, medium, title }) => (
  <div className={`flex justify-center ${classes}`}>
    <a
      className={`font-medium  border-2 rounded-md ${
        big && "px-6 py-2 text-xl"
      }  ${medium && "px-4 py-1 text-lg"} ${color}`}
    >
      {title}
    </a>
  </div>
);

export default CustomButton;

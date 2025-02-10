// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ label, onClick }) => {
  return (
    <div>
      <button className="bg-[#28a0e6] text-white px-5 py-2 w-[180px]" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;

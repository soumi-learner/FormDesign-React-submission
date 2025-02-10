// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Form = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col gap-5  w-full p-5">
      <form onSubmit={formSubmit}>
        {/* Name Field */}
        <div className="flex flex-col w-full">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name} // Controlled input
            onChange={handleChange}
            className="border border-green-800  p-2 w-full"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email} // Controlled input
            onChange={handleChange}
            className="border border-green-800 p-2 w-full"
          />
        </div>

        {/* Text Field */}
        <div className="flex flex-col w-full">
          <label htmlFor="text" className="text-lg font-medium">
            Message
          </label>
          <textarea
            rows="5"
            name="text"
            value={formData.text} // Controlled input
            onChange={handleChange}
            className="border border-green-800 p-2 w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

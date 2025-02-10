// eslint-disable-next-line no-unused-vars
import React from "react";
import pic from "../assets/pic.svg";
import Button from "./Button";
import Form from "./Form";

const Hero = () => {

  const supportClick = () => {
    console.log("support button clicked")
  }
  const callClick = () => {
    console.log("call clicked")
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="main h-[200px] w-[900px]  ">
          <h1 className="text-black font-bold text-5xl">CONTACT US</h1>
          <p className="text-black pt-6">
            LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
            WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
            REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
            EMAIL, OR SOCIAL MEDIA.
          </p>
        </div>
      </div>

      {/* Centering the whole section */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-[900px] h-[600px]  flex pt-[40px]">
          {/* Left Section (Button & Form) */}
          <div className="basis-1/2 flex flex-col gap-5 mt-0">
            {/* Buttons */}
            <div className="flex gap-5 px-4">
              <Button label="VIA SUPPORT CHAT" onClick={supportClick}/>
              <Button label="VIA CALL" onClick={callClick} />
            </div>
            <div>
              <Form />
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="basis-1/2 flex justify-center items-center">
            <img src={pic} className="w-[300px] h-[400px]" alt="Contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

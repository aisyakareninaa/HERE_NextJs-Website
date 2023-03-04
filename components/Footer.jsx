import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-1 px-20 py-10 items-center">
        <div className="items-center lg:items-start gap-5 pr-2">
          <div className="font-semibold md:text-left text-center text-2xl">HERE </div>
        </div>
        <div className="flex flex-row md:ml-200 justify-center gap-8">
          <p className="text-center">
            ; Get your comfort now!
          </p>
        </div>
        <div className="flex justify-end gap-5 mx-auto md:mx-0 md:right-24 md:absolute">
          <a href="https://github.com/aisyakareninaa"><BsGithub className="text-3xl text-gray-500" /></a>
          <a href="https://www.linkedin.com/in/aisya-karenina-ramadhani-b7349217a/"><BsLinkedin className="text-3xl text-gray-500" /></a>
          <a href="https://instagram.com/aisyakareninaa?igshid=ZDdkNTZiNTM="><BsInstagram className="text-3xl text-gray-500" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
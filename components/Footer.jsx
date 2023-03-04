import Link from "next/link";
import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="grid grid-cols-2 bg-black p-10 text-gray-300 xs:grid-cols-1">
    <div className="flex flex-col">
      <div className="flex flex-row items-center py-5">
        <div className=" mx-2 text-lg font-semibold">
        Here just for you
        </div>
      </div>
      <div className="py-2 font-semibold">2023 @ here.com</div>

      <div className="py-2 font-semibold cursor-pointer hover:text-gray-400">
      <Link href='/#aboutus'>About</Link>
      </div>
      <div className="py-2 font-semibold cursor-pointer hover:text-gray-400">
      <Link href='/products/#products'>Our Products</Link>
      </div>
    </div>
    <div className="flex py-5 flex-col xs:py-0">
      <div className="p-2 font-semibold xs:px-0">
        Get your comfort now!
      </div>
      <div className="p-2 font-semibold cursor-pointer hover:text-gray-400">
      <Link href='/contact'>Contact Us</Link>
      </div>
      <div className="p-2 font-semibold cursor-pointer hover:text-gray-400">
      <Link href="https://here-for-you-kappa.vercel.app/">support@hereforyou.com</Link>
      </div>
      <div className="flex flex-row">
        <div className="p-2 xs:px-0 cursor-pointer hover:text-gray-400">
        <a href="https://www.instagram.com/aisyakareninaa/"><BsInstagram /></a>
        </div>
        <div className="p-2 xs:pr-0 cursor-pointer hover:text-gray-400">
        <a href="https://twitter.com/aisyakareninaa"><BsTwitter /></a>
        </div>
        <div className="p-2 xs:pr-0 cursor-pointer hover:text-gray-400">
        <a href="https://www.linkedin.com/in/aisya-karenina-ramadhani-b7349217a/"><BsLinkedin /></a>
        </div>
      </div>
    </div>
  </footer>
);
};

export default Footer;
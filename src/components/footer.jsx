import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="flex justify-between md:flex-row flex-col">
        <div className="flex justify-evenly w-full  md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">Api Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div className=" text-left">
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Terms of Use</li>
              <li className="text-sm py-2">Privacy Policy</li>
              <li className="text-sm py-2">Careers</li>
            </ul>
          </div>
        </div>
        <div className="md:text-right text-center">
          <div className="w-full flex justify-end ">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-2 md:py-0 md:pb-2 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p>Sign up for crypto news</p>
              <div className="flex md:justify-between py-6  md:w-full justify-around m-auto w-[50%]  ">
                <AiOutlineInstagram />
                <FaFacebook />
                <FaGithub />
                <FaTiktok />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-2 ">Powered by CoinGecko</p>
      <p className="text-center">Made in India with &#10084;</p>
    </div>
  );
};

export default footer;

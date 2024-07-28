import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGit,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="Footer" className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-100">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsam
          explicabo eveniet illo tenetur officia aliquam facilis iste, placeat
          expedita maiores deleniti in. Voluptatem, atque alias eum soluta
          dolore commodi?
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="flex justify-around">
      <div className="lg:col-span=2">
        <h6 className="font-medium text-gray-400 mx-16 ps-10">Solutions</h6>
        <ul>
          <li className="py-2 text-sm border-b border-gray-500">Analytics</li>
          <li className="py-2 text-sm border-b border-gray-500">Marketing</li>
          <li className="py-2 text-sm border-b border-gray-500">Commerce</li>
          <li className="py-2 text-sm border-b border-gray-500">Insights</li>
        </ul>
      </div>
      <div className="lg:col-span=3">
        <h6 className="font-medium text-gray-400 mx-16 ps-10">Support</h6>
        <ul>
          <li className="py-2 text-sm border-b border-gray-500">Pricing</li>
          <li className="py-2 text-sm border-b border-gray-500">Documentation</li>
          <li className="py-2 text-sm border-b border-gray-500">Guides</li>
          <li className="py-2 text-sm border-b border-gray-500">API Status</li>
        </ul>
      </div>
      </div>
      
    </div>
  );
};

export default Footer;

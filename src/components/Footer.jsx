import React from "react";
import {
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div tabIndex="0" id="Footer" className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 text-black">
      <div tabIndex="0">
        <h1 tabIndex="0" className="w-full text-3xl font-bold text-[#3C0E1E]">¿Brillamos juntos?</h1>
        <p tabIndex="0" className="py-4">
          Todo lo que necesitas para tener un día maravilloso al alcance de un mensaje, contáctanos
          por nuestras redes oficiales para tener más información.
          Será un gusto ir contigo y tus ideas para hacer crecer tu imaginación! Y lo más importante
          <span className="text-[#66293E] font-semibold"> HACERTE BRILLAR</span>
        </p>
        <div tabIndex="0" className="flex justify-between md:w-[75%] my-6">
          <a tabIndex="0" href="https://www.instagram.com/mangata_ec_/">
          <FaInstagram size={30} color="#3C0E1E"/> 
          </a>
        </div>
      </div>
      <div tabIndex="0" className="flex justify-around">
      <div tabIndex="0" className="lg:col-span=2">
        <h6 tabIndex="0" className="font-medium text-[#66293E] mx-16 ps-10">Bisutería</h6>
        <ul tabIndex="0">
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Anillos</li>
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Aretes</li>
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Cadenas</li>
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Pulseras</li>
        </ul>
      </div>
      <div tabIndex="0" className="lg:col-span=3">
        <h6 tabIndex="0" className="font-medium text-[#66293E] mx-16 ps-10">Beneficios</h6>
        <ul tabIndex="0">
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Brillar con luz propia</li>
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Personalizar a tu gusto</li>
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Calidad grantizada</li>
          <li tabIndex="0" className="py-2 text-sm border-b border-gray-500">Precios razonables</li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Logo from "../assets/Logo.png";

const Analytics = () => {
  return (
    <div tabIndex="0" id="Analytics" className="w-full bg-white">
      <div tabIndex="0" className="max-w-[1240px] max-auto grid md:grid-cols-2">
        <iframe
          src="https://www.youtube.com/embed/6XvYXPclkes"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          style={{ width: '450px', height: '350px' }}
          tabIndex="0"
          className="w-[450px] mx-auto my-4"
        ></iframe>
        <div tabIndex="0" className="flex flex-col justify-center">
          <h1 tabIndex="0" className="text-[#66293E] font-bold text-center text-3xl mb-6">
            NOSOTROS
          </h1>
          <div tabIndex="0" className="grid grid-cols-2 gap-6 px-2">
            <div tabIndex="0" className="pr-2">
              <h3 tabIndex="0" className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 ml-2 text-[#66293E]">
                ¿Quienes somos
              </h3>
              <p tabIndex="0" className="text-[#66293E]">
                Mangata es tu destino para la bisutería minimalista y elegante
                hecha a mano. En Mangata nos enorgullece ofrecer una amplia gama
                de joyería cuidadosamente diseñada para complementar tu estilo
              </p>
            </div>
            <div tabIndex="0" className="pl-1 pt-20">
              <h3 tabIndex="0" className="md:text-4xl sm:text-3xl text-2xl font-bold py-4 text-[#66293E]">
                ¿Qué vendemos?
              </h3>
              <p tabIndex="0" className="text-[#66293E]">
                Nuestras piezas están meticulosamente elaboradas a mano,
                utilizando materiales de alta calidad para crear joyas únicas y
                atemporales. Nos enorgullece ofrecer diseños sencillos y
                versátiles que realzan la belleza natural de quien las lleva
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

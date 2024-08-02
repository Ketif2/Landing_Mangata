import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../index.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../assets/Cristal.png";
import slide_image_2 from "../assets/TalParaCual.png";
import slide_image_3 from "../assets/Gotita.png";
import slide_image_4 from "../assets/DiseñoGriego.png";
import slide_image_5 from "../assets/Divergente.png";
import slide_image_6 from "../assets/Floriciente.png";

const Cards = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div tabIndex="0" id="Cards" className="bg-white w-full py-[2rem] px-8">
      <div tabIndex="0" className="max-w-[1240px] max-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <div tabIndex="0">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            tabIndex="0"
          >
            {[
              slide_image_1,
              slide_image_2,
              slide_image_3,
              slide_image_4,
              slide_image_5,
              slide_image_6,
            ].map((image, index) => (
              <SwiperSlide key={index}>
                <img tabIndex="0" src={image} alt={`Slide ${index + 1} Bisutería de mangata`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div tabIndex="0" className="px-4 py-4">
          <h1 tabIndex="0" className="text-5xl font-bold text-[#3C0E1E] py-5 text-center">
            Productos
          </h1>
          <h2 tabIndex="0" className="text-[#66293E] font-bold text-center text-3xl pb-8">
            Solicitar catálogo
          </h2>
          <p tabIndex="0" className="text-center">
            Recuerda que el trabajo artesanal se distingue de las grandes
            empresas. Cada artículo está pensado y elaborado especialmente para
            ti. En nuestro catálogo, puedes encontrar una amplia gama de
            opciones que puedes personalizar y solicitar según tus preferencias.
          </p>
          <a href={`${process.env.PUBLIC_URL}/CatalogoMangata.pdf`} download={"CatálogoMangata.pdf"}>
          <button tabIndex="0" className="bg-[#66293E] w-[200px] rounded-md font-medium mx-auto py-3 text-white flex justify-center mt-10">
            Descargar
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;

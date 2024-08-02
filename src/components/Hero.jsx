import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <div tabIndex="0" id="Hero"  className='text-white'>
            <div tabIndex="0" className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p tabIndex="0" className='text-[#BB899B] font-bold p-2'>
                    Un espacio para consentirte
                </p>
                <h1 tabIndex="0" className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#915268]'>
                    Brillando contigo
                </h1>
                <div tabIndex="0" className='flex justify-center items-center'>
                    <p tabIndex="0" className='md:text-5xl sm:text-4xl text-xl font-bold py-6 text-[#66293E]'>
                        Bisutería artesanal: 
                    </p>
                    <ReactTyped tabIndex="0" className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-4 text-[#3C0E1E]'
                        strings={['estética', 'personal', 'confiable']}
                        typeSpeed={60}
                        backSpeed={70}
                        loop />
                </div>
                <p tabIndex="0" className='text-[#66293E] md:text-2xl text-xl font-bold'>Siéntete libre de brillar cuando y donde quieras</p>
            </div>
        </div>
    )
}

export default Hero
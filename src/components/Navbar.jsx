import React, { useState } from 'react'
import { HiX, HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    };

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setNav(false);
        } else {
            console.error('No se encontró la sección:', sectionId); // Esto ayudará a depurar
        }
    };

    return (
        <div tabIndex="0" className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 tabIndex="0" className='w-full text-3xl font-bold text-[#022F66]'>Mangata</h1>
            <ul tabIndex="0" className='hidden md:flex'>
                <li tabIndex="0" className='p-6 text-[#30476E]' onClick={() => handleScroll('Hero')} >Inicio</li>
                <li tabIndex="0" className='p-6 truncate  text-[#30476E]' onClick={() => handleScroll('Analytics')}>Nosotros</li>
                <li tabIndex="0" className='p-6 text-[#30476E]' onClick={() => handleScroll('Newsletter')}>Notificanos</li>
                <li tabIndex="0" className='p-6 text-[#30476E]' onClick={() => handleScroll('Cards')}>Productos</li>
                <li tabIndex="0" className='p-6 text-[#30476E]' onClick={() => handleScroll('Footer')}>Contacto</li>
            </ul>
            <div tabIndex="0" onClick={handleNav} className='block md:hidden text-[#30476E]'>
                {nav ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
            </div>
            <div tabIndex="0" className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2a2b2a] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 tabIndex="0" className='w-full text-3xl font-bold text-[#022F66] m-4'>Mangata.</h1>
                <ul tabIndex="0" className='uppercase p-4'>
                    <li tabIndex="0" className='p-4 border-b text-[#CFE1E5] border-gray-100' onClick={() => handleScroll('Hero')} >Inicio</li>
                    <li tabIndex="0" className='p-4 border-b text-[#CFE1E5] border-gray-100' onClick={() => handleScroll('Analytics')}>Nosotros</li>
                    <li tabIndex="0" className='p-4 border-b text-[#CFE1E5] border-gray-100' onClick={() => handleScroll('Newsletter')}>Notificanos</li>
                    <li tabIndex="0" className='p-4 border-b text-[#CFE1E5] border-gray-100' onClick={() => handleScroll('Cards')}>Productos</li>
                    <li tabIndex="0" className='p-4 text-[#CFE1E5]' onClick={() => handleScroll('Footer')}>Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
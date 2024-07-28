import React, { useState } from 'react'
import { HiX, HiMenuAlt3 } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const navigate = useNavigate();

    const handleNav = () => {
        setNav(!nav);
    };

    const handleNavigate = (path) => {
        navigate(path);
        setNav(false);
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Mangata</h1>
            <ul className='hidden md:flex'>
                <li className='p-6 text-[#30476E]' onClick={() => handleNavigate('/')} >Inicio</li>
                <li className='p-6  text-[#30476E]' onClick={() => handleNavigate('/Analytics')}>¿Qué es?</li>
                <li className='p-6 text-[#30476E]' onClick={() => handleNavigate('/Newsletter')}>Promoción</li>
                <li className='p-6 text-[#30476E]' onClick={() => handleNavigate('/Cards')}>Productos</li>
                <li className='p-6 text-[#30476E]' onClick={() => handleNavigate('/Contact')}>Contacto</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <HiX size={25} /> : <HiMenuAlt3 size={25} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2a2b2a] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Mangata.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-100' onClick={() => handleNavigate('/')} >Inicio</li>
                    <li className='p-4 border-b border-gray-100' onClick={() => handleNavigate('/analytics')}>¿Qué es?</li>
                    <li className='p-4 border-b border-gray-100' onClick={() => handleNavigate('/newsletter')}>Promoción</li>
                    <li className='p-4 border-b border-gray-100' onClick={() => handleNavigate('/cards')}>Productos</li>
                    <li className='p-4' onClick={() => handleNavigate('/contact')}>Contacto</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
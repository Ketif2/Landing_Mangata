import React from 'react'


function Newsletter() {

  return (
    <div tabIndex="0" id="Newsletter"  className='w-full py-24 px-4'>
        <div tabIndex="0" className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div tabIndex="0" className='pr-10 my-6'>
                <h1 tabIndex="0" className='md:text-4xl sm:text-3xl text-2xl font-bold py-6'>Un servicio personal y cálido</h1>
                <p tabIndex="0" className='max-w-2xl'>En Mangata, nos comprometemos a brindar una experiencia excepcional, donde la artesanía y la calidad se
                    unen para crear piezas que reflejan estilo y distinción.
                </p>
            </div>
            <div tabIndex="0" className='pl-14 my-6'>
            <p tabIndex="0">  Si deseas más información o un contacto directo <span className='text-[#022F66]'> Notificanos </span></p>
                <div tabIndex="0" className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input tabIndex="0" className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Ingresar Email'/>
                    <button tabIndex="0" className='bg-[#66293E] text-white rounded-full font-medium w-[200px] ml-4 my-6 px-6 py-3'>Enviar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
import React from 'react'
import { IoClose } from "react-icons/io5";
import ButtonLogin from './ButtonLogin';

const ModalLogin = ({close}) => {
  return (
    <div className='fixed bg-black/70 z-50 w-screen h-screen flex justify-center items-center'>
      <div className='bg-white md:w-[25%] w-[70%] rounded-xl relative'>
      <IoClose onClick={close} className='absolute cursor-pointer right-4 top-4'/>
        <h1 className='font-bold text-center py-6 text-2xl text-[#6cc9ff]'>
          Login
        </h1>
        <div className='flex flex-col justify-center items-center p-5'>
          <input className='block border-2 p-2 rounded-lg outline-none border-[#6cc9ff]' type="text" placeholder='email' />
          <input className='block border-2 p-2 rounded-lg outline-none mt-7 border-[#6cc9ff] mb-5' type="password" placeholder='password' />
          <ButtonLogin click={close}/>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin
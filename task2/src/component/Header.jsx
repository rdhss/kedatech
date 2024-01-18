import React, { useEffect, useState } from 'react'
import shape from '../assets/shape-headers.svg'
import ButtonLogin from './ButtonLogin'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Header = ({ login }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [buttonActive, setButtonActive] = useState(false)
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log(login);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition])

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition])



  return (
    <>
      <header className={`w-full fixed hidden md:flex justify-between px-28 py-5 transition-all z-40 ${scrollPosition > 0 && 'bg-[#6cc9ff]'}`} >
        <nav id='left' className='relative'>
          <div className={`w-[30rem] z-[-1] transition-alls ${scrollPosition > 0 && 'hidden'} absolute top-[-16rem] left-[-16rem]`}>
            <img src={shape} alt="" className='animate__animated animate__fadeInDown' />
          </div>
          <div className='text-white text-2xl flex items-center gap-2'>
            <IoMdInformationCircleOutline size={50} className='animate__animated animate__fadeIn'/>
            <a onClick={() => setScrollPosition(0)} className='animate__animated animate__fadeIn'>
              Home
            </a>
          </div>
        </nav>
        <nav className={`text-black flex gap-6 items-center`}>
          <a className={`font-bold text-[#6cc9ff] hover:text-[#22ABF8] ${scrollPosition > 0 && 'text-white'} transition-all cursor-pointer animate__animated animate__fadeInDown delay-1`} href='#about'>About</a>
          <a className={`font-bold text-[#6cc9ff] hover:text-[#22ABF8] ${scrollPosition > 0 && 'text-white'} transition-all cursor-pointer animate__animated animate__fadeInDown delay-2`} href='#pricing'>Pricing</a>
          <a className={`font-bold text-[#6cc9ff] hover:text-[#22ABF8] ${scrollPosition > 0 && 'text-white'} transition-all cursor-pointer animate__animated animate__fadeInDown delay-3`} href='#contact'>Contact</a>
          <ButtonLogin click={login}  className={`${scrollPosition > 0 && 'text-white border-white '} animate__animated animate__fadeInDown delay-4 `} />
        </nav>
      </header>
      <header className='md:hidden fixed w-full bg-[#6cc9ff] flex justify-between items-center py-2 px-7 z-40 '>
        <IoMdInformationCircleOutline className='text-white' size={30} />
        {
          buttonActive ?
            <IoClose className='text-white' size={30} onClick={() => setButtonActive(false)} />
            :
            <FaBars className='text-white' size={30} onClick={() => setButtonActive(true)} />
        }
      </header>
      {buttonActive
        &&
        <div className='fixed mt-11 py-1 bg-white text-center w-full px-5 pb-4 z-50'>
          <a className='text-black px-6 py-2 block' href='#about' onClick={() => setButtonActive(false)}>About</a>
          <a className='text-black px-6 py-2 block' href='#pricing' onClick={() => setButtonActive(false)}>Pricing</a>
          <a className='text-black px-6 py-2 block' href='#contact' onClick={() => setButtonActive(false)}>Contact</a>
          <ButtonLogin className="w-full" click={() => { login(); setButtonActive(false)}} />
        </div>
      }
    </>
  )
}

export default Header
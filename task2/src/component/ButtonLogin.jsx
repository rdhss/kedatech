import React from 'react'

const ButtonLogin = ({className, click}) => {  
  return (
    <button onClick={click} className={`border-2 px-10 py-1 border-[#6cc9ff] hover:border-[#22ABF8] transition-all font-bold rounded-lg text-[#6cc9ff] hover:text-[#22ABF8] ${className}`}>
        Login
    </button>
  )
}

export default ButtonLogin
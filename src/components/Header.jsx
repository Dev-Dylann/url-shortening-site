import React from 'react'
import logo from '../assets/logo.svg'

const Header = ({ navState, setNavState }) => {
  return (
    <section className="flex justify-between items-center lg:gap-10 max-w-[1075px] lg:mx-auto lg:w-full">
        <img src={logo} alt="Shortly" />

        <button type='button' onClick={() => setNavState(prev => !prev)} className='flex flex-col gap-1.5 justify-center items-center w-7 lg:hidden'>
            <span className='h-1 w-full bg-gray-gray rounded-lg origin-bottom-left transition-all' style={navState ? {transform: "rotate(45deg)"} : {}}></span>
            <span className='h-1 w-full bg-gray-gray rounded-lg transition-all' style={navState ? {visibility: "hidden"} : {}}></span>
            <span className='h-1 w-full bg-gray-gray rounded-lg origin-top-left transition-all' style={navState ? {transform: "rotate(-45deg)"} : {}}></span>
        </button>

        <section className='hidden lg:flex grow justify-between items-center gap-4'>
          <nav aria-label='Desktop Nav' className='grow'>
            <ul className='text-violet-gray flex gap-4 font-bold'>
              <li className='hover:text-violet-extraDark cursor-pointer'>Features</li>
              <li className='hover:text-violet-extraDark cursor-pointer'>Pricing</li>
              <li className='hover:text-violet-extraDark cursor-pointer'>Resources</li>
            </ul>
          </nav>

          <button className='py-2 px-6 font-bold text-violet-gray rounded-full hover:text-violet-extraDark cursor-pointer'>Login</button>
          <button className='py-2 px-6 font-bold bg-cyan rounded-full text-white hover:bg-brightCyan'>Sign Up</button>
        </section>
    </section>
  )
}

export default Header
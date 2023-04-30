import React from 'react'
import logo from '../assets/logo.svg'

const Header = ({ navState, setNavState }) => {
  return (
    <section className="flex justify-between items-center">
        <img src={logo} alt="Shortly" />

        <button type='button' onClick={() => setNavState(prev => !prev)} className='flex flex-col gap-1.5 justify-center items-center w-7'>
            <span className='h-1 w-full bg-gray-gray rounded-lg origin-bottom-left transition-all' style={navState ? {transform: "rotate(45deg)"} : {}}></span>
            <span className='h-1 w-full bg-gray-gray rounded-lg transition-all' style={navState ? {visibility: "hidden"} : {}}></span>
            <span className='h-1 w-full bg-gray-gray rounded-lg origin-top-left transition-all' style={navState ? {transform: "rotate(-45deg)"} : {}}></span>
        </button>
    </section>
  )
}

export default Header
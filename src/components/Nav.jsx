import React from 'react'

const Nav = ({ navState }) => {
  return (
    <section className='absolute top-20 left-0 w-full px-6 transition-all duration-500 -translate-y-[125%] z-[20] sm:flex sm:justify-end sm:translate-x-full sm:translate-y-0 md:top-24 md:px-10 lg:hidden' style={navState ? {transform: "translate(0)"} : {}}>
        <nav aria-label='Mobile Nav' className='bg-violet-dark text-center p-10 rounded-lg flex flex-col gap-5 w-full max-w-lg'>
            <ul className='text-xl text-white font-bold space-y-6'>
                <li>Features</li>
                <li>Pricing</li>
                <li>Resources</li>
            </ul>

            <span className='w-full h-0.5 bg-violet-gray'></span>

            <div className='space-y-2'>
            <button type='button' className='text-xl text-white font-bold w-full rounded-full py-2'>Login</button>
            <button type='button' className='bg-cyan text-xl text-white font-bold w-full rounded-full py-2'>Sign Up</button>
            </div>
        </nav>
    </section>
  )
}

export default Nav
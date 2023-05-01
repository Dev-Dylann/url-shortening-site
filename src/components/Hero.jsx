import React from 'react'
import heroImg from '../assets/illustration-working.svg'

const Hero = () => {
  return (
    <section className='grow flex flex-col gap-6 lg:flex-row relative lg:py-24 lg:items-center lg:max-w-[1075px] lg:w-full lg:mx-auto '>
        <div className='w-[135%] pl-6 sm:w-[120%] sm:pl-20 sm:flex sm:justify-end md:justify-center md:pl-14 lg:absolute lg:-right-[20vw] lg:w-2/3'>
            <img src={heroImg} alt="Working Illustration" className='' />
        </div>

        <article className='text-center flex flex-col gap-4 px-6 lg:text-left lg:px-0 lg:w-1/2'>
            <h1 className="text-4xl text-violet-extraDark font-bold sm:text-5xl lg:text-7xl">More than just shorter links</h1>

            <p className='text-violet-gray sm:text-lg lg:-mt-4 lg:w-[90%]'>Build your brand's recognition and get detailed insights on how your links are performing.</p>

            <button className='bg-cyan rounded-full font-bold text-lg mt-2 p-3 w-2/3 mx-auto text-white hover:bg-brightCyan sm:text-xl lg:mx-0 lg:w-fit lg:px-8'>
                Get Started
            </button>
        </article>
    </section>
  )
}

export default Hero
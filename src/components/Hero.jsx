import React from 'react'
import heroImg from '../assets/illustration-working.svg'

const Hero = () => {
  return (
    <section className='grow flex flex-col gap-6'>
        <div className='w-[135%] pl-6'>
            <img src={heroImg} alt="Working Illustration" className='' />
        </div>

        <article className='text-center flex flex-col gap-4 px-6'>
            <h1 className="text-4xl text-violet-extraDark font-bold">More than just shorter links</h1>

            <p className='text-violet-gray'>Build your brand's recognition and get detailed insights on how your links are performing.</p>

            <button className='bg-cyan rounded-full font-bold text-lg mt-2 p-3 w-2/3 mx-auto text-white'>
                Get Started
            </button>
        </article>
    </section>
  )
}

export default Hero
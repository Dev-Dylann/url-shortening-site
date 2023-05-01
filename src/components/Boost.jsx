import React from 'react'

const Boost = () => {
  return (
    <section className='px-6 py-24 flex flex-col items-center gap-4 text-center bg-violet-dark bg-[url("./assets/bg-boost-mobile.svg")] bg-cover lg:bg-[url("./assets/bg-boost-desktop.svg")] lg:bg-center lg:gap-6'>
        <h2 className='text-[27px] leading-[34px] text-white font-bold sm:text-3xl lg:text-4xl'>Boost your links today</h2>

        <button type='button' className='bg-cyan text-white font-bold text-lg py-3 px-10 rounded-full hover:bg-brightCyan sm:text-xl lg:text-2xl'>Get Started</button>
    </section>
  )
}

export default Boost
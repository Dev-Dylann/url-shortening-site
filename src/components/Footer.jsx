import React from 'react'
import logo from '../assets/logo.svg'
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='px-6 py-12 bg-violet-extraDark'>
      <div className='flex flex-col items-center lg:flex-row lg:gap-8 lg:items-start lg:max-w-[1075px] lg:mx-auto lg:w-full'>
      <img src={logo} alt="" className='invert'/>

      <section className='text-center mt-8 flex flex-col gap-8 lg:flex-row lg:items-start lg:mt-0 lg:text-left lg:grow lg:justify-end lg:gap-20'>
        <article className='flex flex-col gap-4 items-center lg:items-start'>
          <h4 className='text-lg text-white font-bold'>Features</h4>
          <ul className='text-violet-gray space-y-2'>
            <li className='hover:text-cyan cursor-pointer'>Link Shortening</li>
            <li className='hover:text-cyan cursor-pointer'>Branded Links</li>
            <li className='hover:text-cyan cursor-pointer'>Analytics</li>
          </ul>
        </article>

        <article className='flex flex-col gap-4 items-center'>
          <h4 className='text-lg text-white font-bold'>Resources</h4>
          <ul className='text-violet-gray space-y-2'>
            <li className='hover:text-cyan cursor-pointer'>Blog</li>
            <li className='hover:text-cyan cursor-pointer'>Developers</li>
            <li className='hover:text-cyan cursor-pointer'>Support</li>
          </ul>
        </article>

        <article className='flex flex-col gap-4 items-center'>
          <h4 className='text-lg text-white font-bold'>Company</h4>
          <ul className='text-violet-gray space-y-2'>
            <li className='hover:text-cyan cursor-pointer'>About</li>
            <li className='hover:text-cyan cursor-pointer'>Our Team</li>
            <li className='hover:text-cyan cursor-pointer'>Careers</li>
            <li className='hover:text-cyan cursor-pointer'>Contact</li>
          </ul>
        </article>

        <article className='flex items-center gap-8 text-white'>
          <a href="" className='hover:text-cyan text-2xl'>
            <FaFacebook />
          </a>
          <a href="" className='hover:text-cyan text-2xl'>
            <FaTwitter />
          </a>
          <a href="" className='hover:text-cyan text-2xl'>
            <FaPinterest />
          </a>
          <a href="" className='hover:text-cyan text-2xl'>
            <FaInstagram />
          </a>
        </article>
      </section>
      </div>
    </footer>
  )
}

export default Footer
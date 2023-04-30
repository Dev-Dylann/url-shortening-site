import React from 'react'
import logo from '../assets/logo.svg'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <>
      <img src={logo} alt="" className='invert'/>

      <section className='text-center mt-8 flex flex-col gap-8'>
        <article className='flex flex-col gap-4 items-center'>
          <h4 className='text-lg text-white font-bold'>Features</h4>
          <ul className='text-violet-gray space-y-2'>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </article>

        <article className='flex flex-col gap-4 items-center'>
          <h4 className='text-lg text-white font-bold'>Resources</h4>
          <ul className='text-violet-gray space-y-2'>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </article>

        <article className='flex flex-col gap-4 items-center'>
          <h4 className='text-lg text-white font-bold'>Company</h4>
          <ul className='text-violet-gray space-y-2'>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </article>

        <article className='flex items-center gap-8'>
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={pinterest} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </article>
      </section>
    </>
  )
}

export default Footer
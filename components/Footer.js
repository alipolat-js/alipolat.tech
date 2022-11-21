import React from 'react'
import İmage from 'next/image';
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className='pt-32 pb-2 bg-theme-dark-box'>
      <div className='container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-theme-pale-gray-on-dark'>
        <div>
          <Link spy to="home" className='cursor-pointer'>
            <svg width="50  " viewBox="0 0 739 699" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M133.02 699H0.207031L296.594 0.757812H435.754L738.488 699H599.328L519.738 508.57H287.805L332.238 396.266H472.863L363 134.059L133.02 699Z" fill="#0EA5E9" />
            </svg>
            <h3 className='font-light mt-4 tracking-widest font-montserrat'>CREATIVE - PERFORMANCED - INNOVATIVE SOLUTIONS</h3>
          </Link>

          <p className='max-w-md mt-6'>
            I am a Full Stack Developer with experience developing frontend and backend systems.
            I am ready to be your solution partner on the way to the digital world.
          </p>
        </div>

        <div className='sm:pl-10 sm:border-l'>
          <p className='font-semibold'>
            Phone
          </p>

          <a href="tel:+905536768361" title='call' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fas fa-phone mr-2 text-theme-text'></i>
            +90 553 676 83 61
          </a>

          <a href="https://api.whatsapp.com/send?phone=+905536768361&text=Hello,%20I%20want%20to%20get%20information%20about%20your%20services." title='whatsapp' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fab fa-whatsapp mr-2 text-lg text-theme-text'></i>
            +90 553 676 83 61
          </a>

          <p className='font-semibold mt-3'>
            Or Direct Message
          </p>

          <a href="https://linkedin.com/in/-alipolat" title='linkedin' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fab fa-linkedin-in mr-2 text-lg text-theme-text'></i>
            Ali POLAT
          </a>

          <a href="https://twitter.com/_alipolat" title='twitter' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fab fa-twitter mr-2 text-theme-text'></i>
            @_alipolat
          </a>

          <a href="https://instagram.com/__alipolat" title='instagram' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fab fa-instagram mr-2 text-theme-text'></i>
            @__alipolat
          </a>
        </div>

        <div className='md:pl-10 md:border-l'>
          <div className='flex space-x-4 items-center mb-8'>
            <İmage src='/assets/direction.svg' alt='Kahramanmaraş, Turkey' width={50} height={50} />
            <p className='text-lg text-theme-pale-gray-on-dark'>Kahramanmaraş <br /> Turkey</p>
          </div>

          <p className='max-w-md'>
            Do not hesitate to contact me to get service or to satisfy your curiosity.
          </p>

          <p className='max-w-md mt-5'>
            Email
          </p>

          <a href="mailto:business@alipolat.tech" title='business@alipolat.tech' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fa-regular fa-envelope text-theme-text text-lg mr-2'></i>
            business@alipolat.tech
          </a>

          <a href="mailto:contact@alipolat.tech" title='contact@alipolat.tech' rel='noreferrer noopener' target='_blank' className='hover:text-theme-text transition duration-300 mt-3 block font-montserrat'>
            <i className='fa-regular fa-envelope text-theme-text text-lg mr-2'></i>
            contact@alipolat.tech
          </a>
        </div>
      </div>

      <p className='font-montserrat text-theme-pale-gray-on-dark text-center px-8 mt-20'>Quick Links</p>
      <div className='w-full px-8 flex flex-wrap justify-center items-center space-x-6 text-theme-text text-sm md:text-base'>
        <Link spy to="home" className="block mt-4 cursor-pointer hover:text-white transition duration-300 ease-in-out">Home</Link>
        <Link spy to="about" className="block mt-4 cursor-pointer hover:text-white transition duration-300 ease-in-out">About Me</Link>
        <Link spy to="services" className="block mt-4 cursor-pointer hover:text-white transition duration-300 ease-in-out">Services</Link>
        <Link spy to="contact" className="block mt-4 cursor-pointer hover:text-white transition duration-300 ease-in-out">Contact</Link>
      </div>

      <a href="/privacy-policy" title='Privacy Policy' rel='noreferrer noopener' target='_blank' className='block mt-2 text-center text-theme-text hover:text-white transition duration-300 ease-in-out font-montserrat'>
        Privacy Policy
      </a>

      <div className='container mx-auto px-8 font-montserrat font-semibold text-theme-pale-gray-on-dark mt-10 text-sm tracking-wide'>
        <a href='https://www.alipolat.tech' target="_blank" rel="noopener noreferrer" className='hover:text-gray-500 duration-300'>Ali POLAT</a> © 2022 All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {

  return (
    <motion.nav
      className='w-full fixed top-0 bg-theme-dark font-montserrat z-30'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: .5 }}
    >
      <div className='container mx-auto px-8 flex py-4 items-center justify-between'>
        {/* Logo */}
        <Link spy to="home" className='cursor-pointer'>
          <svg height="40" viewBox="0 0 739 699" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M133.02 699H0.207031L296.594 0.757812H435.754L738.488 699H599.328L519.738 508.57H287.805L332.238 396.266H472.863L363 134.059L133.02 699Z" fill="#0EA5E9" />
          </svg>
        </Link>

        {/* Routes */}
        <div className='items-baseline hidden lg:flex space-x-6'>
          <Link spy to="home" className='cursor-pointer hover:text-theme-text transition duration-300 ease-in-out'>Home</Link>
          <Link spy to="about" activeClass="text-theme-text" className='cursor-pointer hover:text-theme-text transition duration-300 ease-in-out'>About Me</Link>
          <Link spy to="services" activeClass="text-theme-text" className='cursor-pointer hover:text-theme-text transition duration-300 ease-in-out'>Services</Link>
          <Link spy to="contact" activeClass="text-theme-text" className='cursor-pointer hover:text-theme-text transition duration-300 ease-in-out'>Contact Me</Link>
        </div>

        {/* Social */}
        <div className='items-baseline hidden lg:flex space-x-6'>
          <a href='https://tr.linkedin.com/in/-alipolat' target='_blank' rel='noreferrer noopener' title='linkedin' className='text-xl cursor-pointer text-theme-text hover:text-white transition duration-300 ease-in-out'>
            <i className='fab fa-linkedin-in'></i>
          </a>

          <a href='https://mobile.twitter.com/_alipolat/' target='_blank' rel='noreferrer noopener' title='@_alipolat' className='text-xl cursor-pointer text-theme-text hover:text-white transition duration-300 ease-in-out'>
            <i className='fab fa-twitter'></i>
          </a>
        </div>

        {/* Burger Button */}
        <span className='text-3xl ml-8 cursor-pointer lg:hidden duration-300'>
          <label htmlFor="menu-control">
            <i className="fa-solid fa-bars-staggered"></i>
          </label>
        </span>

        <input id="menu-control" type={"checkbox"} className="hidden" />

        {/* Burger Menu */}
        <div className='fixed top-0 right-0 h-full w-full z-40 flex flex-col items-center justify-between bg-theme-dark nav-menu text-3xl px-8 font-semibold text-center duration-300'>

          <div>
            <label htmlFor='menu-control'><i className="duration-300 fa-solid fa-arrow-right fixed top-8 left-8 z-50 text-theme-text-red text-4xl cursor-pointer"></i></label>
            <Link spy to="home" className='hover:text-black duration-300 block mt-4 pb-16 pt-8' >
              <svg width="100" viewBox="0 0 739 699" fill="none" xmlns="http://www.w3.org/2000/svg" className='mx-auto'>
                <path d="M133.02 699H0.207031L296.594 0.757812H435.754L738.488 699H599.328L519.738 508.57H287.805L332.238 396.266H472.863L363 134.059L133.02 699Z" fill="#0EA5E9" />
              </svg>
            </Link>

            <Link spy to="home" className='cursor-pointer hover:text-theme-text-red transition duration-300 ease-in-out'>Home</Link>
            <Link activeClass="text-theme-text-red" spy to="about" className="block mt-6 cursor-pointer hover:text-theme-text-red transition duration-300 ease-in-out">About Me</Link>
            <Link activeClass="text-theme-text-red" spy to="services" className="block mt-6 cursor-pointer hover:text-theme-text-red transition duration-300 ease-in-out">Services</Link>
            <Link activeClass="text-theme-text-red" spy to="contact" className="block mt-6 cursor-pointer hover:text-theme-text-red transition duration-300 ease-in-out">Contact Me</Link>
          </div>

          <div className='items-baseline inline-flex space-x-6 my-12 mx-auto'>
            <a href='https://www.instagram.com/__alipolat/' target='_blank' rel='noreferrer noopener' title='@__alipolat' className='text-3xl cursor-pointer text-theme-text hover:text-white transition duration-300 ease-in-out'>
              <i className='fab fa-instagram'></i>
            </a>

            <a href='https://tr.linkedin.com/in/-alipolat' target='_blank' rel='noreferrer noopener' title='@__alipolat' className='text-3xl cursor-pointer text-theme-text hover:text-white transition duration-300 ease-in-out'>
              <i className='fab fa-linkedin-in'></i>
            </a>

            <a href='https://mobile.twitter.com/_alipolat/' target='_blank' rel='noreferrer noopener' title='@_alipolat' className='text-3xl cursor-pointer text-theme-text hover:text-white transition duration-300 ease-in-out'>
              <i className='fab fa-twitter'></i>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
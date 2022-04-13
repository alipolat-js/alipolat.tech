import React from 'react';
import SocialMediaGroup from './SocialMediaGroup';

const Footer = ({ followLinksActive }) => {

  return (
    <footer className='w-full h-full mx-auto mt-24 font-notoSerif'>

      {followLinksActive && <div className='pb-16'>
        <h1 className='pb-4 text-2xl font-bold'>Follow me</h1>

        <div className="flex items-center space-x-4 text-3xl">
          <SocialMediaGroup />
        </div>
      </div>}

      <h3 className='pb-2 text-2xl font-bold'>Contact</h3>
      <ul className='pb-2 font-sans'>
        <li className='pb-1 text-gray-300 hover:text-gray-400'><a href='mailto:contact@alipolat.tech' rel='noopener noreferrer'><i className="fa-solid fa-envelope" /> contact@alipolat.tech</a></li>
        <li className='pb-1 text-gray-300 hover:text-gray-400'><a href='mailto:business@alipolat.tech' rel='noopener noreferrer'><i className="fa-solid fa-envelope" /> business@alipolat.tech</a></li>
      </ul>
      <p className='pb-6 text-md italic text-gray-300'>or dm on social media</p>

      <span className='text-lg font-bold'>Thanks for visiting &nbsp;<i className="fa-solid fa-heart text-red-600" /></span>
    </footer>
  );
};

export default Footer;
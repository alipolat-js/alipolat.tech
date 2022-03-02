import React, {useState} from 'react';
import { motion } from "framer-motion";

const Footer = ({followLinksActive}) => {
  const [followLinks, setfollowLinks] = useState(followLinksActive)

  return (
    <footer className='w-full h-full mx-auto pt-32 font-sans'>

      {followLinks && <div className='pb-16'>
        <h1 className='text-2xl font-bold pb-4'>Follow me</h1>
        <div className="flex items-center flex-wrap space-x-6 text-4xl">
          <motion.a
            href="https://linkedin.com/in/-alipolat"
            target={"_blank"}
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-linkedin-color"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fab fa-linkedin" />
          </motion.a>

          <motion.a
            href="https://github.com/alipolat-js"
            target={"_blank"}
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-github-color"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fab fa-github" />
          </motion.a>

          <motion.a
            href="https://dribbble.com/alipolat"
            target={"_blank"}
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-dribbble-color"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fab fa-dribbble" />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/__alipolat/"
            target={"_blank"}
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-instagram-color"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fab fa-instagram" />
          </motion.a>

          <motion.a
            href="https://twitter.com/_alipolat"
            target={"_blank"}
            rel="noopener noreferrer"
            className="transition-colors duration-300 text-twitter-color"
            whileHover={{ scale: 1.1 }}
          >
            <i className="fab fa-twitter" />
          </motion.a>
        </div>
      </div>}

      <ul className='pb-4'>
        <li className='text-gray-300 pb-1'><a href='mailto:contact@alipolat.tech' rel='noopener noreferrer' className='hover:text-gray-400'>contact@alipolat.tech</a></li>
        <li className='text-gray-300 pb-1'><a href='mailto:business@alipolat.tech' rel='noopener noreferrer' className='hover:text-gray-400'>business@alipolat.tech</a></li>
      </ul>

      <span className='text-lg font-bold'>Thanks for visiting &nbsp; &lt;3</span>
    </footer>
  );
};

export default Footer;
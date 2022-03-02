import React from 'react';
import Typical from "react-typical"
import { motion } from "framer-motion";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={2}
        wrapper="p"
        steps={[
          "React Native Developer", 2000,
          "NodeJs Developer", 2000,
          "UI/UX Designer", 2000,
          "ReactJs Developer", 2000,
          "Full Stack Developer", 2000,
        ]}
      />
    );
  },
  (props, prevprops) => true
);

TypingAnimation.displayName = "TypingAnimation"

const HomeSection = () => {
  return (
    <div className="w-full h-full max-w-4xl mx-auto">

      <h6 className="text-xl text-gray-300">Hello, I&apos;m</h6>
      <h1 className="mt-3 text-primary-light font-bold text-5xl tracking-normal">ALİ POLAT</h1>
      <div className="mt-4 md:mt-3 text-2xl font-normal text-transparent bg-gradient-to-r from-cyan-300 via-purple-700 to-pink-800 bg-clip-text">
        <TypingAnimation />
      </div>

      {/* Social Accounts */}
      <div className="flex items-center flex-wrap mt-8 space-x-6 text-4xl">
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

      <h1 className="mt-16 text-xl text-gray-200">
        I&apos;m always trying to learn more and improve myself. 
        <br />
        I enjoy doing this job.
      </h1>
    </div>
  );
};

export default HomeSection;
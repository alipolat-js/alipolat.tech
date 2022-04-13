import React from 'react'
import { motion } from "framer-motion";

const SocialMediaGroup = () => {
  return (
    <>
      <motion.a
        href="https://linkedin.com/in/-alipolat"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-linkedin-color"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fab fa-linkedin" />
      </motion.a>

      <motion.a
        href="https://github.com/alipolat-js"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-github-color"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fab fa-github" />
      </motion.a>

      <motion.a
        href="https://dribbble.com/alipolat"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-dribbble-color"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fab fa-dribbble" />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/__alipolat/"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-instagram-color"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fab fa-instagram" />
      </motion.a>

      <motion.a
        href="https://twitter.com/_alipolat"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-twitter-color"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fab fa-twitter" />
      </motion.a>

      <motion.a
        href="https://medium.com/@alipolat.js"
        target={"_blank"}
        rel="noopener noreferrer"
        className="text-primary-light"
        whileHover={{ scale: 1.1 }}
      >
        <i className="fa-brands fa-medium" />
      </motion.a>
    </>
  )
}

export default SocialMediaGroup
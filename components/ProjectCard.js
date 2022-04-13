import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";

const ProjectCard = ({
  project: {
    title,
    description,
    githubSource,
    liveSource,
    tags,
    image,
    date,
  }, motionDelay }) => {

  return (
    <motion.div
      className="w-full rounded-xl p-1 shadow-lg shadow-black relative"
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0, transition: { duration: .5, delay: motionDelay * 0.2 } }}
      whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
    >
      <a
        href={liveSource}
        target="_blank"
        rel="noopener noreferrer"
        title='click for live'
      >
        <Image
          src={image.url}
          alt={title}
          width={575}
          height={383.8}
          className="object-cover rounded-lg"
        />
      </a>

      <div className='py-4 px-2'>
        <a
          href={githubSource}
          target="_blank"
          rel="noopener noreferrer"
          title='click for source'
        >
          <h3 className='my-2 font-bold text-xl text-center font-notoSerif'>{title}</h3>
        </a>

        <p className='my-2 text-sm text-center text-gray-200'>{description}</p>

        <div className="hidden md:flex items-center justify-center flex-wrap py-3">
          {tags.map((tag, key) => (
            <span
              key={key}
              className="inline-flex items-center justify-center px-3 py-1 mx-2 my-1 text-xs font-bold rounded-full cursor-pointer bg-primary-light text-primary-dark"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <span className='absolute right-4 bottom-2 text-sm text-gray-400'>{date}</span>
    </motion.div>
  )
}

export default ProjectCard
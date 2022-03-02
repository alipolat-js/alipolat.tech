import React from 'react'
import { motion } from "framer-motion";

const ProjectCard = ({
  project: {
    id,
    title,
    description,
    githubSource,
    liveSource,
    tags,
    image,
    date,
  } }) => {

  return (
    <motion.div
      className="w-full rounded-xl p-1 shadow-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600"
      whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
    >
      <div className='w-full h-full rounded-lg bg-transparent'>
        <a
          href={liveSource}
          target="_blank"
          rel="noopener noreferrer"
          title='click for live'
        >
          <img src={image.url} alt={title} className="object-cover w-full rounded-lg" />
        </a>

        <div className='py-4 px-2'>
          <a
            href={githubSource}
            target="_blank"
            rel="noopener noreferrer"
            title='click for source'
          >
            <h3 className='font-bold text-center my-2'>{title}</h3>
          </a>
          <p className='text-sm text-gray-200 text-center my-2'>{description}</p>

          <div className="hidden md:flex items-center justify-center flex-wrap py-3">
            {tags.map((tag, key) => (
              <span
                key={key}
                className="inline-flex items-center justify-center px-3 py-1 mx-2 my-1 text-xs font-bold rounded-full cursor-pointer bg-rose-600"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { getLastProjects } from '../functions/getProjects';
import { motion } from "framer-motion";

const ProjectsWidget = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const projects = await getLastProjects();
      setdata(projects)
    }

    getProjects()
  }, [])

  return (
    <div className='w-full max-w-4xl mx-auto mt-12'>
      <Link href="/projects"><a className='text-2xl font-bold cursor-pointer pt-6 text-primary-light'>My Recent Projects</a></Link>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 pb-4'>
        {data.map((project, i) => (
          <motion.div
            key={project.id}
            className="w-full rounded-xl p-1 shadow-lg shadow-black"
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0, transition: { duration: .5, delay: i * 0.2 } }}
            whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2, } }}
          >
            <div className='w-full h-full rounded-lg bg-transparent'>
              <a
                href={project.liveSource}
                target="_blank"
                rel="noopener noreferrer"
                title='click for live'
              >
                <Image
                  src={project.image.url}
                  alt={project.title}
                  width={575}
                  height={383.8}
                  className="object-cover w-full rounded-lg"
                />
              </a>

              <div className='py-4 px-2'>
                <a
                  href={project.githubSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  title='click for source'
                >
                  <h3 className='my-2 font-bold text-center font-notoSerif'>{project.title}</h3>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link href="/projects"><a className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer">more projects</a></Link>
    </div>
  );
};

export default ProjectsWidget;
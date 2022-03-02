import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { getAllProjects } from '../functions/getProjects';
import { motion } from "framer-motion";

const ProjectsWidget = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    const getProjects = async () => {
      const projects = await getAllProjects();
      setdata(projects)
    }

    getProjects()
  }, [])
  
  return (
    <div className='w-full max-w-4xl mx-auto pt-12'>
      <Link href="/projects"><h1 className='text-2xl font-bold cursor-pointer pt-6 text-orange-400'>My Projects</h1></Link>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 pt-6 pb-4'>
        {data.map(project => (
          <motion.div
          key={project.id}
          className="w-full rounded-xl p-1 shadow-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600"
          whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className='w-full h-full rounded-lg bg-transparent'>
            <a
              href={project.liveSource}
              target="_blank"
              rel="noopener noreferrer"
              title='click for live'
            >
              <img src={project.image.url} alt={project.title} className="object-cover w-full rounded-lg" />
            </a>
    
            <div className='py-4 px-2'>
              <a
                href={project.githubSource}
                target="_blank"
                rel="noopener noreferrer"
                title='click for source'
              >
                <h3 className='font-bold text-center my-2'>{project.title}</h3>
              </a>   
            </div>
          </div>
        </motion.div>
        ))}
      </section>

      <Link href="/projects"><span className="hover:text-gray-200 cursor-pointer">more projects</span></Link>
    </div>
  );
};

export default ProjectsWidget;
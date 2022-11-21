import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const HomeSection = () => {
  // Upload Effect States
  const [satisfaction, setsatisfaction] = useState(1)
  const [experienceYear, setexperienceYear] = useState(1)
  const [hours, sethours] = useState(1)

  useEffect(() => {
    if (satisfaction < 100) {
      setTimeout(() => {
        setsatisfaction(satisfaction + 1)
      }, 10);
    }

    if (experienceYear < 3) {
      setTimeout(() => {
        setexperienceYear(experienceYear + 1)
      }, 600);
    }

    if (hours < 8) {
      setTimeout(() => {
        sethours(hours + 1)
      }, 240);
    }

  })

  return (
    <div className='pt-40' id='home'>
      <div className='container mx-auto px-8'>
        <motion.div 
          className='text-center font-montserrat'
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1 , scale: 1 }}
          transition={{ duration: .7 }}
        >
          <div className='text-lg md:text-xl lg:text-2xl text-theme-extra-pale-gray-on-dark'>Hello, I am</div>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mt-2 md:mt-5'>
            ALİ POLAT

            <div className='mt-2 md:mt-3 text-xl md:text-2xl lg:text-3xl text-theme-text'>
              FULL STACK DEVELOPER
            </div>
          </h1>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl mt-16'>
          <motion.p
            className='text-center md:text-left my-auto text-3xl sm:text-4xl lg:text-5xl font-montserrat font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-sky-200 to-theme-text'
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1 , x: 0 }}
            transition={{ duration: .7, delay: .5 }}
          >
            I DESIGN AND DEVELOP AMAZING WEB SITES AND APPLICATIONS
          </motion.p>

          <div className='w-full text-center md:text-right mt-12 md:mt-0'>
            <div className='py-6'>
              <span className='block text-4xl font-extrabold font-montserrat text-theme-text'>{satisfaction}&#37;</span>
              <span className='block mt-2 md:mt-0 lg:text-xl text-theme-pale-gray-on-dark'>Satisfaction</span>
            </div>

            <div className='py-6 border-y border-theme-extra-pale-gray-on-dark inline-block'>
              <span className='block text-4xl font-extrabold font-montserrat text-theme-text'>{experienceYear} YEARS</span>
              <span className='block mt-2 md:mt-0 lg:text-xl text-theme-pale-gray-on-dark'>IT Experience</span>
            </div>

            <div className='py-6'>
              <span className='block text-4xl font-extrabold font-montserrat text-theme-text'>{hours}K +</span>
              <span className='block mt-2 md:mt-0 lg:text-xl text-theme-pale-gray-on-dark'>Hours Of Works</span>
            </div>
          </div>

        </div>
      </div>

      <div className="custom-shape-divider-bottom-1668643722 mt-32">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default HomeSection
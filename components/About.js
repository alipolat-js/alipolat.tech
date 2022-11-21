import React, {useEffect} from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const aboutHeaderVariants = {
  visible: { opacity: 1, translateX: 0, transition: { duration: .7 } },
  hidden: { opacity: 0, translateX: 250 }
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    "threshold": 0.2,
    "triggerOnce": true
  });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden")
  }, [controls, inView]);

  return (
    <div className='py-24 bg-white text-theme-extra-pale-gray-on-white' id='about'>
      <div className='container mx-auto px-8'>
        <motion.h2
          className='max-w-2xl text-3xl md:text-3xl lg:text-4xl font-extrabold font-montserrat text-theme-pale-gray-on-white mb-2 md:ml-12'
          variants={aboutHeaderVariants}
          ref={ref}
          initial="visible"
          animate={controls}
        >
          I am a Full Stack Developer with experience developing frontend and backend systems
        </motion.h2>

        <div className='md:w-3/4 max-w-4xl mx-auto mt-12'>
          <div className='font-montserrat text-3xl font-extrabold mb-4 text-theme-text'>About Me</div>
          <p className='text-xl font-semibold'>
            I have a passion for learning new technologies and creating applications that solve real-world problems. I am a self-taught developer always looking for new challenges and opportunities to learn and grow.
          </p>

          <p className='text-xl font-semibold mt-4'>
            I took the first steps of my career, which I have been continuing professionally for 3 years, with my interest in this job in my childhood. I developed my first game at the age of 10 and my first web page at the age of 11.
          </p>

          <p className='text-xl font-semibold mt-4'>
            At the beginning of 2020, I got my first job as a freelance full stack developer and continued to work as a freelancer for a while.
          </p>

          <p className='text-xl font-semibold mt-4'>
            I met the <a className='text-blue-600' href='https://scoutli.co' title='Scoutli' rel='noopener noreferrer' target={'_blank'}>Scoutli</a> Team in June 2021 and we worked together for almost a year.
            I created the landing page, the authentication system, and the first product dashboard from ground to sky. I&apos;ve worked closely with the product team and backend developers to get the most out of this. While doing all this, I gained experience in project management, project architecture, project security and many other big jobs. great pride for me
            During this process, I started as a Frontend Developer, became the team leader of the team and left the team to work freelance at the end of 10 months.
          </p>

          <p className='text-xl font-semibold mt-4'>
            Currently, I own a company on my own behalf and offer web and mobile solutions to companies and individuals in line with their needs.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
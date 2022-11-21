import React, {useEffect} from 'react'
import İmage from 'next/image'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: .7 } },
  hidden: { opacity: 0, scale: 1.4 }
};

const itemGroupVariants = {
  visible: {
    opacity: 1,
    transition: {
      delay: .3,
      delayChildren: .3,
      staggerChildren: .3
    }
  },
  hidden: { opacity: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .4
    }
  }
};

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    "threshold": 0.2,
    "triggerOnce": true
  });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden")
  }, [controls, inView]);

  return (
    <div className='py-10'>
      <div className='text-center md:text-start max-w-xl mx-auto'>
          <motion.h3
            className='text-center text-4xl sm:text-6xl md:text-5xl lg:text-7xl font-montserrat font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-theme-text via-sky-200 to-theme-text'
            variants={titleVariants}
            ref={ref}
            initial="hidden"
            animate={controls}  
          >
            LET&apos;S <br /> WORK <br /> TOGETHER
          </motion.h3>

          <motion.div
            className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mt-8 mb-8 sm:mb-0'
            variants={itemGroupVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              className='hover:scale-110 duration-300'
              variants={itemVariants}  
            >
              <div className='flex items-center justify-center h-[70px] sm:h-[100px]'>
                <İmage src='/assets/direction.svg' alt='Kahramanmaraş, Turkey' width={60} height={60} className="w-[40px] sm:w-[60px]" />
              </div>

              <p className='text-lg text-theme-pale-gray-on-dark'>Kahramanmaraş <br /> Turkey</p>
            </motion.div>

            <motion.div
              className='hover:scale-110 duration-300'
              variants={itemVariants}
            >
              <div className='flex items-center justify-center h-[70px] sm:h-[100px]'>
                <İmage src='/assets/email.svg' alt='Email' width={60} height={60} className="w-[40px] sm:w-[60px]" />
              </div>

              <a
                href='mailto:business@alipolat.tech'
                target="_blank"
                rel="noopener noreferrer"
                title='business@alipolat.tech'
                className='block text-theme-pale-gray-on-dark hover:text-theme-text duration-300'
              >
                business@alipolat.tech
              </a>

              <a
                href='mailto:contact@alipolat.tech'
                target="_blank"
                rel="noopener noreferrer"
                title='contact@alipolat.tech'
                className='block text-theme-pale-gray-on-dark hover:text-theme-text duration-300 mt-1'
              >
                contact@alipolat.tech
              </a>
            </motion.div>
          </motion.div>
        </div>
    </div>
  )
}

export default Contact
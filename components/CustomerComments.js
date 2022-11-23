import React, { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component'
import { getCustomerComments } from '../getData';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: .7 } },
  hidden: { opacity: 0, x: -200 }
};

const descVariants = {
  visible: { opacity: 1, translateY: 0, transition: { duration: .7, delay: .5 } },
  hidden: { opacity: 0, translateY: 30 }
};

const CustomerComments = () => {
  // create data state for comments
  const [data, setdata] = useState([])

  // get comments from graphcms
  useEffect(() => {
    const getComments = async () => {
      const comments = await getCustomerComments();
      setdata(comments)
    }

    getComments()
  }, [])

  if (data.length !== 0) {
    // Flickity Options for Carousel
    var flickityOptions = {
      pageDots: false,
      wrapAround: true,
      draggable: true,
      autoPlay: 10000,
      prevNextButtons: false,
    }
  }

  const controls = useAnimation();
  const [ref, inView] = useInView({
    "threshold": 0.2,
    "triggerOnce": true
  });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden")
  }, [controls, inView]);

  return (
    <div className='container px-8 mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <motion.h3
            className='text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold tracking-widest text-theme-text mb-8'
            variants={titleVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            HAPPY  <br />
            CUSTOMERS
          </motion.h3>

          <motion.p
            className='text-xl sm:text-3xl font-bold mb-8'
            variants={descVariants}
            ref={ref}
            initial="hidden"
            animate={controls}
          >
            What my customers say about me
          </motion.p>

          <a href="https://works.alipolat.tech" title='My Portfolio' target={'_blank'} rel="noopener noreferrer" className='cursor-pointer text-theme-pale-gray-on-dark hover:text-theme-text duration-300 text-xl font-bold'>
            <i className="fa-solid fa-arrow-right-long mr-2"></i> Visit my portfolio to see the details of my work for my clients
          </a>
        </div>

        {
          data.length !== 0 &&
          <Flickity
            className={'text-center overflow-x-hidden'}
            options={flickityOptions}
            static
            reloadOnUpdate
          >
            {data.map((comment, index) => (
              <div key={index} className="w-full cursor-pointer lg:mt-5 xl:mt-8 px-2">
                <p className="text-lg text-theme-pale-gray-on-dark">
                  {comment.customerComment}
                </p>
                <p className="text-lg md:text-xl font-bold font-montserrat mt-4">
                  {comment.customerName}
                </p>
                <p className="font-bold font-montserrat text-theme-pale-gray-on-dark">
                  {comment.customerPositionAndCompany}
                </p>
              </div>
            ))}
          </Flickity>
        }

      </div>
    </div>
  )
}

export default CustomerComments
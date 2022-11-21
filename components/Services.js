import React, { useEffect } from 'react'
import İmage from 'next/image'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: .7 } },
  hidden: { opacity: 0, scale: 1.4 }
};

const descVariants = {
  visible: { opacity: 1, translateY: 0, transition: { duration: .7, delay: .5 } },
  hidden: { opacity: 0, translateY: 30 }
};

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    "threshold": 0.2,
    "triggerOnce": true
  });

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden")
  }, [controls, inView]);

  return (
    <div id="services" className='py-32'>
      <div className='container mx-auto px-8'>
        <motion.div
          className='text-4xl font-extrabold text-center mb-4 text-theme-text font-montserrat'
          variants={titleVariants}
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          The Services I Provide
      </motion.div>
      <motion.p
        className='text-xl text-center max-w-5xl mx-auto'
        variants={descVariants}
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        I produce the most suitable solution for you in line with your needs.
      </motion.p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 sm:gap-8 mt-12'>
        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/corporate.svg' alt='Corporate Website' width={75} height={75} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>Corporate Website</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I will create high-performance websites for your company, specially designed for your corporate identity, where you can present your services and information to your customers
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/personal.svg' alt='Personal Website' width={50} height={50} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>Personal Website</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I will make a personal website where you can deliver your designs or works to your customers, share your portfolio, share blog posts and photos
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/web-app.svg' alt='Web App' width={55} height={55} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>Web App</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I create dynamic fast and powerful web applications and SaaS applications where you can make your web application and project ideas available
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/seo.svg' alt='SEO' width={60} height={60} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>SEO</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            By working to increase the performance of your website, I ensure that your website rank high in search engines and I provide consultancy services for your website
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/mobile.svg' alt='Mobile App' width={32} height={35} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>Mobile App</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I develop performance and user-friendly cross-platform mobile applications for your website or project idea in line with your needs
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/ecommerce.svg' alt='E-Commerce App' width={75} height={75} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>E-Commerce App</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I make e-commerce sites where you can sell your products to your customers over the internet, grow your business and increase sales figures
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/logo-design.svg' alt='Logo Design' width={50} height={50} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>Logo Design</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I design creative and interesting logos suitable for your corporate identity for your business.
          </p>
        </div>

        <div className='flex flex-col items-center rounded-lg'>
          <div className='flex items-center justify-center h-[80px]'>
            <İmage src='/assets/product.svg' alt='Product Design' width={75} height={75} />
          </div>
          <h2 className='text-2xl font-bold font-montserrat text-center mb-2'>Product Design</h2>
          <p className='text-center text-theme-pale-gray-on-dark max-w-md'>
            I make mobile-friendly designs of websites and mobile applications compatible with your corporate identity for your business.
          </p>
        </div>
      </div>

      <h2 className='text-center mt-24 text-2xl sm:text-5xl lg:text-6xl font-montserrat font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-br from-theme-text via-sky-200 to-theme-text'>
        CREATIVE <br />
        PERFORMANCED <br />
        INNOVATIVE <br />
        SOLUTIONS
      </h2>
    </div>
    </div >
  )
}

export default Services
import React, { useState, useEffect } from 'react'
import İmage from 'next/image';
import { Formik, Form } from 'formik';
import { MessageField, TextField } from './TextField';
import * as Yup from 'yup';
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const svgVariants = {
  visible: { opacity: 1, translateX: 0, transition: { duration: .7, } },
  hidden: { opacity: 0, translateX: -200 }
};

const formVariants = {
  visible: { opacity: 1, translateX: 0, transition: { duration: .7, } },
  hidden: { opacity: 0, translateX: 200 }
};

const ContactForm = () => {
  let validate;
  // for phone validate
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  // Validation Schema
  validate = Yup.object({
    name: Yup.string()
      .required('*zorunlu'),
    email: Yup.string()
      .email('Geçerli bir email adresi girin.')
      .required('*zorunlu'),
    tel: Yup.string()
      .matches(phoneRegExp, 'Geçerli Bir Telefon Numarası Girin')
      .required('*zorunlu'),
    message: Yup.string()
      .required('*zorunlu'),
  })

  const [submitting, setsubmitting] = useState(false)
  const [submissionSuccessful, setsubmissionSuccessful] = useState(false)

  // Submit
  const handleSubmit = async (values, { resetForm }) => {

    setsubmitting(true)

    setTimeout(() => {
      setsubmitting(false)
      resetForm()
      setsubmissionSuccessful(true)

      setTimeout(() => {
        setsubmissionSuccessful(false)
      }, 5000);
    }, 2000);

    // Contact api request
    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
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
    <div className='py-20 w-full' id='contact'>
      <div className='w-full max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 '>
        <motion.div
          variants={svgVariants}
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <İmage src='/assets/contact.svg' alt='Contact' width={350} height={350} className="mx-auto my-auto" />
        </motion.div>

        <motion.div
          className='w-full max-w-sm bg-theme-dark-box py-10 px-8 rounded-md mx-auto'
          variants={formVariants}
          ref={ref}
          initial="hidden"
          animate={controls}
        >
          <Formik
            // initial values
            initialValues={{
              name: '',
              email: '',
              tel: '',
              message: ''
            }}

            validationSchema={validate}

            onSubmit={(values, { resetForm }) => {
              handleSubmit(values, { resetForm })
            }}
          >
            {formik => (
              <Form>
                <TextField label="Name Surname" name="name" type="text" />
                <TextField label="Tel" name="tel" type="tel" />
                <TextField label="Email" name="email" type="email" />
                <MessageField label="Message" name="message" />

                <a href="/privacy-policy" title='Privacy Policy' rel='noreferrer noopener' target='_blank' className='block mt-2 mb-4 text-theme-text text-sm hover:text-white transition duration-300 ease-in-out font-montserrat'>
                  Privacy Policy
                </a>

                <div className='mt-2' data-aos="fade-up" data-aos-duration="800">
                  <button
                    className={`font-bold py-3 px-4 rounded-md w-full duration-300 border-2
                    ${submitting ? "border-theme-extra-pale-gray-on-white text-theme-extra-pale-gray-on-dark" : "border-theme-text hover:bg-theme-text text-theme-text hover:text-white"}
                  `} type="submit" disabled={(submissionSuccessful || submitting) ? true : false}>SEND
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className={`z-50 fixed top-16 left-8 bg-green-600 text-primary-light p-4 font-bold rounded-md duration-300 ${submissionSuccessful ? "opacity-1" : "opacity-0"}`} >
            Your message has been sent
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactForm
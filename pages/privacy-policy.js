import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Ali POLAT | Privacy Policy</title>
        <meta property='og:title' content="Ali POLAT" />
        <meta name="description" content="Read the privacy policy to see what your data is used for and how it is processed" />
        <meta property='og:descriptipn' content="Read the privacy policy to see what your data is used for and how it is processed" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="author" content="Ali POLAT"></meta>
        <meta name="theme-color" content="#162229"></meta>
      </Head>

      <div className='py-32'>
        <div className='container mx-auto px-8 max-w-3xl'>
          <Link href={'/'} >
            <svg className='mx-auto' width="100 " viewBox="0 0 739 699" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M133.02 699H0.207031L296.594 0.757812H435.754L738.488 699H599.328L519.738 508.57H287.805L332.238 396.266H472.863L363 134.059L133.02 699Z" fill="#0EA5E9" />
            </svg>
          </Link>

          <h1 className='text-center my-8 text-4xl font-montserrat font-bold md:text-5xl' >PRIVACY POLICY</h1>

          <div className='text-theme-pale-gray-on-dark text-xl font-semibold'>
            <p>
              If you have any questions or concerns about this privacy statement or our practices regarding your personal information, please contact me. <a href='mailto:contact@alipolat.tech' target={'_blank'} rel="noopener noreferrer" title='contact@alipolat.tech' className='text-theme-extra-pale-gray-on-dark hover:text-theme-text duration-300'>contact@alipolat.tech</a>
            </p>
            <br />
            <p>
              No cookies are stored or used on the site. This website was developed by Ali POLAT, shared in an open source manner, non-profit.
            </p>
            <br />
            <p>
              If you fill out the contact form on the homepage only, the information requested in the form is collected and is not stored anywhere
            </p>
            <br />
            <p>
              The data collected through the contact form is only processed for communication purposes between you and the site owner. It is not shared with any other 3rd source. The mail server running in the background for the processing of your data sends the data you have entered to the site owner by e-mail, and sends you a notification and a thank you message that the message has been sent via e-mail.
            </p>
            <br />
            <p>
              Also for the site resource: <a href='https://github.com/alipolat-js/freelancer-portfolio' target={'_blank'} rel="noopener noreferrer" title='resource' className='text-theme-extra-pale-gray-on-dark hover:text-theme-text duration-300'>https://github.com/alipolat-js/freelancer-portfolio</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
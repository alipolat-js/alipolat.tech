import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const NotFound = () => {
  return (
    <Layout
      title={"Page Not Found"}
      descripotion={"Page Not Found"}
    >
      <section className='pt-32 text-center'>
        <h2 className='mb-8 text-4xl font-bold text-rose-600'>404 - Page Not Found</h2>

        <Link href="/">
          <a className='text-2xl font-bold text-sky-400 hover:text-sky-600'>
            <i className="fa-solid fa-arrow-left-long pr-2" /> Go back home
          </a>
        </Link>
      </section>
    </Layout>
  )
}

export default NotFound
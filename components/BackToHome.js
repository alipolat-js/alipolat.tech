import React from 'react'
import Link from 'next/link'

const BackToHome = () => {
  return (
    <Link href="/">
      <a className="px-3 py-2 rounded-full absolute left-6 top-12 font-bold text-xl">
        <i className="fa-solid fa-arrow-left-long pr-2"></i> Back to home
      </a>
    </Link>
  )
}

export default BackToHome
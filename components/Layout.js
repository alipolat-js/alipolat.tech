import React from 'react';
import Head from 'next/head'


const Layout = ({ title, descripotion, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name="description" content={descripotion} />
        <meta property='og:descriptipn' content={descripotion} />
        <meta name="author" content="Ali POLAT"></meta>
        <meta name="theme-color" content="#1c1d26"></meta>
        <link rel="icon" href="logo.svg" />

        {/* Buy Me a Coffee */}
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="alipolat"
          data-description="Support me on Buy me a coffee!"
          data-message="Hi. You can buy me coffee to support me..."
          data-color="#3c63fc"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>

      <div className='min-h-screen antialiased font-sans bg-primary-dark text-primary-light'>
        <div className='w-full max-w-6xl h-full px-7 py-32 mx-auto'>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
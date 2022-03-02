import React from 'react';
import Head from 'next/head'
import Menu from './Menu';


const Layout = ({ title, descripotion, menuColor, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name="description" content={descripotion} />
        <meta property='og:descriptipn' content={descripotion} />
        <link rel="icon" href="/favicon.ico" />

        {/* Buy Me a Coffee */}
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="alipolat"
          data-description="Support me on Buy me a coffee!"
          data-message="Hi. You can buy me coffee to support me..."
          data-color="#5F7FFF"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </Head>

      <div className='min-h-screen antialiased bg-primary-dark text-primary-light font-montserrat'>
        <div className='w-full h-full px-7 py-32 max-w-6xl mx-auto'>
          {children}
        </div>
        <Menu color={menuColor} />
      </div>
    </>
  );
};

export default Layout;
import React from 'react';

import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import BackToHome from '../../components/BackToHome';

const GalleryPage = ({ projects }) => {
  return (
    <Layout
      title={"Blog"}
      descripotion={"You can reach all my projects here, you can reach the sources and live links of the projects."}
      menuColor={"bg-pink-500"}
    >
      <BackToHome />
      <h1 className='text-3xl font-bold pb-3 text-pink-400'>My Blog</h1>
      {/* <p className='text-xl font-medium'>All my blog posts are here. You can follow me to be notified of new posts.</p> */}


      <h1 className='font-bold text-4xl py-16'>Sorry. There are no photo yet :(</h1>
      <Footer followLinksActive={true}/>
    </Layout>
  );
};

export default GalleryPage;
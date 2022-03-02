import React from 'react';
import Link from 'next/link';

const GalleryWidget = () => {
  return (
    <div className='w-full h-full max-w-4xl mx-auto pt-24'>
      <h2 className='text-2xl font-bold'>My Gallery</h2>
      <Link href="/gallery">more photos</Link>
    </div>
  );
};

export default GalleryWidget;
import React from 'react';
import Link from 'next/link';

const BlogsWidget = () => {
  return (
    <div className='w-full h-full max-w-4xl mx-auto pt-24'>
      <h2 className='text-2xl font-bold'>My Blog</h2>
      <Link href="/blog">more blog posts</Link>
    </div>
  );
};

export default BlogsWidget;
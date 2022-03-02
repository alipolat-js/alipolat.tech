import React from 'react';
import Link from 'next/link';

const FlowWidget = () => {
  return (
    <div className='w-full h-full max-w-4xl mx-auto pt-14'>
      <h2 className='text-2xl font-bold'>Flow</h2>
      <Link href="/flow">more</Link>
    </div>
  );
};

export default FlowWidget;

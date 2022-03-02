import React, { useState } from 'react';
import Link from 'next/link';

const Menu = ({color}) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);

  return (
    <div
      className={`z-40 flex flex-col justify-center fixed h-full right-0 top-0 duration-300
      ${menuIsOpen && "backdrop-blur-sm w-full"}`}
      onClick={() => menuIsOpen && setmenuIsOpen(false)}
    >
      <div
        className={`flex flex-col justify-center fixed w-32 h-72 px-5 rounded ${color || "bg-blue-500"} duration-300
        ${menuIsOpen ? "right-0" : "-right-[123px]"}`}
        onClick={() => setmenuIsOpen(true)}
      >
        <div className={`flex justify-around items-center absolute w-12 h-12 -left-5 top-31 rounded-[100px] ${color || "bg-blue-500"}`}>
          <div
            className='cursor-pointer'
            onClick={() => setmenuIsOpen(!menuIsOpen)}
          >
            <i className={`fas fa-chevron-left duration-300 ${menuIsOpen && "rotate-180"}`}></i>
          </div>
          <div></div>
        </div>
        <ul className='z-50 text-xl font-bold'>
          <li className='pb-5 duration-150 hover:text-stone-300'><Link href={"/"}>Home</Link></li>
          <li className='pb-5 duration-150 hover:text-stone-300'><Link href={"/projects"}>Projects</Link></li>
          <li className='pb-5 duration-150 hover:text-stone-300'><Link href={"/blog"}>Blog</Link></li>
          <li className='duration-150 hover:text-stone-300'><Link href={"/gallery"}>Gallery</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
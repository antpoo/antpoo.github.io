import React from 'react';
import GitButton from './GitButton';

function Navbar() {
    
  return (
    <header className='bg-gradient-to-r from-blue-500 to-purple-500 md:sticky top-0 z-10'>
      <div className='pl-10 container flex flex-wrap p-1 flex-col md:flex-row items-center text-blue-200'>
        <a className='title-font font-medium mb-4 md:mb-0'>
          <a href='/#top' className='ml-3 text-xl text-gray-100'>
            Andrew Jiang
          </a>
        </a>
        <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center'>
          <a href='/#about' className='mr-5 hover:text-white'>
            About
          </a>
          <a href='/projects' className='mr-5 hover:text-white'>
            Projects
          </a>
          <a href='achievements' className='mr-5 hover:text-white'>
            Achievements
          </a>
          <a href='/blog' className='mr-5 hover:text-white'>
            Blog
          </a>
          <a href='/#contact' className='mr-5 hover:text-white'>
            Contact
          </a>
        </nav>
        <GitButton />
      </div>
      
    </header>
  );

}

export default Navbar;
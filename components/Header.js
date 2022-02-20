import Image from 'next/image';
import React from 'react';
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 x-50 grid grid-cols-3
    bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10
      cursor-pointer my-auto">
          <Image src="https://links.papareact.com/qd3"
           layout='fill'
           objectFit='contain'
           objectPosition="left"
           alt="" 
           />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full py-2">
          <input 
          className="flex-grow pl-5 bg-transparent
           outline-none md:shadow-sm text-sm text-gray-600 
           placeholder-gray-480"
           type="text" placeholder="Start your search" />
           <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white
           p-2 cursor-pointer md:mx-2"/>
      </div>

      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer"/>
          <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
            <MenuIcon className="h-6"/>
            <UserCircleIcon className="h-6"/>
          </div>
      </div>
      
    </header>
  )
}

export default Header;


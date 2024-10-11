'use client'
import React, { useState } from 'react'
import SearchIcon from '@/Icons/SearchIcon';
import HeartIcon from '@/Icons/HeartIcon';
import CartIcon from '@/Icons/CartIcon';
import MenuIcon from '@/Icons/MenuIcon';
import ToggleUserMenu from '@/components/Dropdown/Client/ToggleUserMenu';
import NotificationIcon from '@/Icons/NotificationIcon';
import LinkItem from './LinkItem';
import Image from 'next/image';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { ScanSearch } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };
  console.log(isMenuOpen)
  return (
  <header className="sticky top-0 shadow-md bg-white tracking-wide z-50 px-10">
    <div className="flex flex-wrap justify-center px-10 py-3 relative">
      <div className="max-xl:hidden xl:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
        <LinkItem />
      </div>
    </div>
    <section className=" flex flex-wrap items-center justify-center gap-4 py-2 border-gray-200 border-b min-h-[75px]">
      <Link href='/'>
        <div className='hidden md:flex flex-col items-center'>
          <Image
            src="/images/brandlogo/brandlogo.png"
            alt="Brand logo"
            width={50}
            height={50}
            className="shadow-lg rounded-md"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
          <Label className='text-sm font-semibold ml-2 hidden lg:block'>Winshopee</Label>
        </div>
      </Link>
      
      <div className="hidden lg:flex lg:w-2/5 xl:w-[50%] bg-gray-100 gap-2 px-4 py-3 rounded">
        <ScanSearch className='text-slate-500'/>
        <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full text-sm" />
      </div>

      <div className="flex items-center justify-center space-x-8 xl:space-x-4 px-2">
        <span className="relative">
          <NotificationIcon />
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-primary px-1 py-0 text-xs text-white">4</span>
        </span>
        <span className="relative">
          <HeartIcon />
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-primary px-1 py-0 text-xs text-white">1</span>
        </span>
        <span 
        className="relative"
        onClick={(e)=> window.location.href='/cart'}
        >
          <CartIcon />
          <span className="absolute left-auto -ml-1 top-0 rounded-full bg-primary px-1 py-0 text-xs text-white">4</span>
        </span>
        <div className="inline-block cursor-pointer border-gray-300">
          <ToggleUserMenu />
        </div>
        <div className='flex xl:hidden'>
          <button onClick={handleToggleMenu}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <div className='flex items-center justify-center w-full px-2'>
        <div className="lg:hidden w-full md:w-3/4 flex items-center bg-gray-100 gap-2 px-4 py-3 rounded">
          <ScanSearch className='text-slate-500'/>
          <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full text-sm" />
        </div>
      </div>
    </section>

    {/* sidebar view on mobile */}
    <div 
    className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
   >
      <div
      className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} h-full lg:!block max-xl:before:fixed max-xl:before:bg-black max-xl:before:opacity-40 max-xl:before:inset-0 max-xl:before:z-50`}
      >
        <button onClick={handleToggleMenu} className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000" />
            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000" />
          </svg>
        </button>
        <LinkItem />
      </div>
    </div>
  </header>
  )
}

export default Header

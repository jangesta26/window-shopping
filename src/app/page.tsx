import React from 'react';
import Brand from "@/components/Common/Brand";
import Header from "@/components/Navbar/Client";
import { ShoppingCart } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import DarkModeSwitch from '@/components/Switch/DarkModeSwitch';
import { ModeToggle } from '@/components/Button/ModeToggle';

const HomePage: React.FC = () => {
  return (
    <>
      <Header>
        <div className="flex w-full flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-2 px-4 sm:px-6 md:px-8">
          {/* Brand component */}
          <Link href="#" className="flex items-center gap-2">
              <Image
              src="/images/brandlogo/brandlogo.png"
              alt="Brand logo"
              width={60}
              height={60}
              className="shadow-lg rounded-md"
              />
                  <h2 className="text-md font-bold leading-6 text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl lg:leading-8">
                  Winshopee
                  </h2>
          </Link>
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <label htmlFor="Search" className="sr-only">Search</label>
                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md border-gray-200 px-3 py-2.5 shadow-sm sm:text-sm outline-none"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              <div className="w-18 h-10 flex items-center justify-center gap-2">
                <Button
                  className='bg-primary hover:bg-primary/90 dark:hover:bg-primary px-2 rounded-full items-center'
                >
                  <ShoppingCart className='h-4'/>
                </Button>
               
              </div>
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HomePage;

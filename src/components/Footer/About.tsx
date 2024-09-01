'use client'
import { PlusCircleIcon, MinusCircleIcon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // Adjust based on your breakpoints
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call handler right away so state is set correctly

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="border-b border-gray-700 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
      <h3 
        className={`flex py-2 items-center justify-between text-md font-semibold leading-6 text-white cursor-pointer ${isDesktop ? '' : 'md:hidden'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        About
        {
          !isDesktop && (
            isOpen ? (
              <MinusCircleIcon className="ml-2" />
            ) : (
              <PlusCircleIcon className="ml-2" />
            )
          )
        }
      </h3>
      {(isDesktop || isOpen) && (
        <ul role="list" className="mt-6 space-y-4">
          <li>
            <a href="/predictiveanalysis" className="text-md leading-6 text-gray-300 hover:text-gray-50">Predictive Analysis</a>
          </li>
          <li>
            <a href="/customerexperience" className="text-md leading-6 text-gray-300 hover:text-gray-50">Customer Experience</a>
          </li>
          <li>
            <a href="/automation" className="text-md leading-6 text-gray-300 hover:text-gray-50">Automation</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default About;

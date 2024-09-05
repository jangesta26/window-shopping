import React, { useState } from 'react';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

const HeaderItem = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Navigation */}
        <DesktopView />

      {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden relative top-4 z-20 p-2 text-gray-500 dark:text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      {/* Mobile Menu */}
        <MobileView 
        setMobileMenuOpen={!isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        />
    </div>
  );
};

export default HeaderItem;

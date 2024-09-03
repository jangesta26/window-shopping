import React from 'react';
import HeaderItem from './HeaderItem';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="sticky top-0 flex flex-col h-36 items-center justify-center gap-4 border-b bg-muted px-4 md:px-6 z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-0.5">
          <HeaderItem />
        </div>
      </div>
      <div className="w-full">
        {children}
      </div>
    </header>
  );
};

export default Header;

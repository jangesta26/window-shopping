import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="sticky top-0 flex flex-col h-36 items-center justify-center gap-4 border-b bg-muted px-4 md:px-6 z-10">
        {children}
    </header>
  );
};

export default Header;

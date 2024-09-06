import React from 'react'
import HeaderItem from '@/components/Navbar/Client/HeaderItem';
import BrandSmall from '@/components/Common/BrandSmall';
import SearchItem from '@/components/Input/SearchItem';
import ButtonCart from '@/components/Button/ButtonCart';

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-col items-center justify-center gap-4 bg-muted px-4 md:px-6 z-10">
    <HeaderItem />
    <div className="w-full">
      <div className="flex w-full flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 py-2 px-4 sm:px-6 md:px-8">
        {/* Brand component */}
        <div className="md:block hidden">
          <BrandSmall />
        </div> 
        <div className="relative w-full md:w-1/2 lg:w-1/3">
          <div className="flex items-center gap-2">
            <SearchItem />
            <ButtonCart />
          </div>
        </div>
      </div>
    </div>
</header>
  )
}

export default Header

import React from 'react'
import MobileSidebar from '../Sheet/MobileSidebar'
import SearchInput from '../Input/SearchInput'
import ToggleUserMenu from '../Dropdown/ToggleUserMenu'
import { Label } from '../ui/label'
import DarkModeSwitch from '../Switch/DarkModeSwitch'

const Navbar = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-muted px-4 md:px-6 z-10">
      <MobileSidebar />
      <div className="w-full flex-1">
        <SearchInput />
      </div>
      <div className='flex gap-2 items-center'>
      <DarkModeSwitch/>
      <div className='flex gap-2 items-center'>
        {/* Responsive visibility: hidden on screens smaller than 'md', visible on 'md' and larger */}
        <div className='hidden md:flex flex-col items-end'>
        <Label className='font-semibold'>Administrator</Label>
        <Label className='font-light'>admin</Label>
        </div>
        <ToggleUserMenu/>
      </div>
      
      </div>
    </header>
  )
}

export default Navbar

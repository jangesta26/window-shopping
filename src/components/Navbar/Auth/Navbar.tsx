'use client'
import React from 'react'
import MobileSidebar from '../../Sheet/MobileSidebar'
import SearchInput from '../../Input/SearchInput'
import ToggleUserMenu from '../../Dropdown/ToggleUserMenu'
import { Label } from '../../ui/label'
import DarkModeSwitch from '../../Switch/DarkModeSwitch'
import { useAuth } from '@/providers/AuthContext'
import NotFound404 from '@/components/Common/NotFound.tsx/404'

const Navbar = () => {
  // const { logout, isAuthenticated, userRole } = useAuth();
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-muted px-4 md:px-6 z-10">
      <MobileSidebar />
      <div className="w-full flex-1">
        <SearchInput />
      </div>
      <div className='flex gap-2 items-center'>
      <DarkModeSwitch/>
      <div className='flex gap-2 items-center'>
        <div className='hidden md:flex flex-col items-end'>
        <Label className='font-semibold'>Administrator</Label>
        <Label className='font-light first-letter:uppercase'>seller</Label>
        </div>
        <ToggleUserMenu />
      </div>
      
      </div>
    </header>
  )
}

export default Navbar

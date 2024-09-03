import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import SidebarItem from '../Sidebar/SidebarItem'
import HamburgerButton from '../Button/HamburgerButton'
import ToggleNotifications from '../Button/ToggleNotifications'
import SidebarHeader from '../Sidebar/SidebarHeader'
import Upgrade from '../Card/Upgrade'


const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HamburgerButton/>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col lg:hidden">
        <div className="flex h-14 items-center border-b px-4 py-2 lg:h-[50px] lg:px-6">
            <SidebarHeader title="Acme Inc"/>
            <ToggleNotifications title="Toggle notifications"/>
        </div> 
        <nav className="grid gap-2 text-lg font-medium">
          <SidebarItem/>
        </nav>
        <div className="mt-auto">
          <div className='flex p-1'>
            <Upgrade 
              title="Upgrade to Pro"
              description=" Unlock all features and get unlimited access to our support
              team."
              buttonName="Upgrade"
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar

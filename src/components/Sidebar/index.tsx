import React from 'react'
import SidebarItem from './SidebarItem'
import SidebarHeader from './SidebarHeader'
import ToggleNotifications from '../Button/ToggleNotifications'
import Upgrade from '../Card/Upgrade'

const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-0 px-4 lg:h-[60px] lg:px-6">
          <SidebarHeader title="Acme Inc"/>
          <ToggleNotifications title="Toggle notifications"/>
        </div> 
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <SidebarItem />
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Upgrade 
          title="Upgrade to Pro"
          description=" Unlock all features and get unlimited access to our support
          team."
          buttonName="Upgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default Sidebar

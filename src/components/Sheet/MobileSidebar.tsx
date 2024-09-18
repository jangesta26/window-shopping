'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import SidebarItem from '../Sidebar/SidebarItem';
import Upgrade from '../Card/Upgrade';
import SidebarHeader from '../Sidebar/SidebarHeader';
import { useSidebar } from '@/providers/SidebarProvider';
import { Menu } from 'lucide-react';

const MobileSidebar: React.FC = () => {
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <Sheet open={isOpen} onOpenChange={openSidebar}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
          onClick={openSidebar}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col" onClick={closeSidebar}>
        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
        <nav className="grid gap-2 text-lg font-medium">
          <div className='mb-8'>
            <SidebarHeader title="Window Shopee" />
          </div>
          <SidebarItem />
        </nav>
        <div className="mt-auto">
          <Upgrade 
            title="Upgrade to Pro"
            description="Unlock all features and get unlimited access to our support team."
            buttonName="Upgrade"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

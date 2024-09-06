import React from 'react';
import { ModeToggle } from '@/components/Button/ModeToggle';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '@/providers/AuthContext';
import { Label } from '@/components/ui/label';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import BrandSmall from '@/components/Common/BrandSmall';
import Link from 'next/link';

const HeaderItem = () => {
  const { isAuthenticated, userRole, logout } = useAuth();

  return (
    <div className="w-full mx-auto">
      <nav aria-label="Global" className="flex items-center justify-between w-full">
        <div className="flex-1">
          <ul className="hidden md:flex items-center justify-center gap-6 text-sm">
            <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Feedback</a></li>
            <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Save More App</a></li>
            <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Sell on Winshopee</a></li>
            <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Customer Care</a></li>
            <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Track My Orders</a></li>
            {!isAuthenticated ? (
              <div className='flex gap-4'>
              
                <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/buyer/signin">Login</a></li>
                <li><a className="rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-muted shadow dark:hover:bg-primary" href="#">Register</a></li>
              </div>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className='flex items-center gap-2'>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Image src="/images/user/user-01.png" width={34} height={34} alt="Avatar" className="rounded-full" />
                    </Button>
                    <Label className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75">
                      Welcome {userRole && 'User!'}
                    </Label>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
            <ModeToggle />
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden mt-2">
          {
            !isAuthenticated 
              ? (
                <div className=' grid grid-cols-1 -mb-4'>
                  <BrandSmall/>
                  <Label className='text-center'>
                    Click here! {" "}
                      <Link href='/buyer/signin' className='text-muted bg-primary w-12 px-2 rounded-full py-1 shadow-lg'>
                        Login 
                      </Link>
                  </Label>

                </div>
              ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                {
                  isAuthenticated && (

                  <div className='flex items-center gap-2'>
                    <Button variant="outline" size="icon" className="rounded-full">

                      <Avatar className=''>
                          <AvatarImage 
                          src='/images/user/user-01.png'
                          alt="profile" 
                          />
                          <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                    </Button>
                  </div>
                )}
                </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
              </DropdownMenu>
          )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderItem;

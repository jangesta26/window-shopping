import React from 'react'
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

const MobileView = (
    {
        setMobileMenuOpen,
        toggleMobileMenu
    } : {
        setMobileMenuOpen:boolean
        toggleMobileMenu: () => void
    }
) => {
    const { isAuthenticated, userRole, logout } = useAuth();
  return (
    <div
    className={`fixed inset-0 z-30 bg-muted-foreground/90 dark:bg-gray-800 transition-transform transform ${setMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
    aria-hidden={!setMobileMenuOpen}
    >
        <div className="p-4 text-center">
            <button
                className="flex items-center justify-center w-full p-2 text-gray-500 dark:text-white"
                onClick={toggleMobileMenu}
                aria-label="Close menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <ul className="flex flex-col gap-4 mt-4">
                <li><a className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Feedback</a></li>
                <li><a className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Save More App</a></li>
                <li><a className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Sell on Winshopee</a></li>
                <li><a className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Customer Care</a></li>
                <li><a className="text-white transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Track My Orders</a></li>
                {
                !isAuthenticated ? (
                    <>
                    <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/buyer/signin">Login</a></li>
                    <li><a className="rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-muted shadow dark:hover:bg-primary" href="#">Register</a></li>
                    </>
                ) : (
                    <li>
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
                        <DropdownMenuContent align="start">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </li>
                )
                }
                <li className=''><ModeToggle /></li>
            </ul>
        </div>
    </div>
  )
}

export default MobileView

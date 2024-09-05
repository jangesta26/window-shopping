import React, { useState } from 'react';
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

const DesktopView = () => {
    const { isAuthenticated, userRole, logout } = useAuth();
return (
    <nav aria-label="Global" className="hidden md:flex">
        <ul className="flex items-center gap-6 text-sm">
        <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Feedback</a></li>
        <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Save More App</a></li>
        <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Sell on Winshopee</a></li>
        <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Customer Care</a></li>
        <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="#">Track My Orders</a></li>
        {
            !isAuthenticated ? (
            <>
                <li><a className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75" href="/buyer/signin">Login</a></li>
                <li><a className="rounded-md bg-primary px-2 py-0.5 text-sm font-medium text-muted shadow dark:hover:bg-primary" href="#">Register</a></li>
            </>
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
            )
        }
        <ModeToggle />
        </ul>
     </nav>
  )
}

export default DesktopView

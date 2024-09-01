'use client'
import React from 'react'
import { CircleUser,} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from 'next/navigation'

const ToggleUserMenu = () => {
  const router = useRouter();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        onClick={(e)=> router.push('/signin')}
        >Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ToggleUserMenu

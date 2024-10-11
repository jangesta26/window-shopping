'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useAuth } from '@/providers/AuthContext'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import User from '@/Icons/User'
import style from './style.module.css'

const ToggleUserMenu = () => {
  const { logout, isAuthenticated, userRole } = useAuth()
  const router = useRouter();

  return (
  <>
    {
      isAuthenticated ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className={`${style.tooltip_container}`}>
            
            <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"

            >
              <div className='flex items-center '>
                <div>
                <span className={`${style.tooltip}`}>Hi!, buyer</span>
                  <Image
                    src="/images/user/user-01.png"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full text-white"
                  />
                </div>
              </div>
            </Button>
            
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='hover:cursor-pointer'>My Orders</DropdownMenuItem>
            <DropdownMenuItem className='hover:cursor-pointer'>My Message</DropdownMenuItem>
            <DropdownMenuItem className='hover:cursor-pointer'>My Coupons</DropdownMenuItem>
            <DropdownMenuItem className='hover:cursor-pointer'>My Points</DropdownMenuItem>
            <DropdownMenuItem className='hover:cursor-pointer'>Setting</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
              onClick={logout}
              className='hover:cursor-pointer'
              >Logout
              </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
      <DropdownMenu>
        <DropdownMenuTrigger asChild >
          <Button variant="secondary" size="icon" className="rounded-full h-8 w-8">
              <User />
              <span className="sr-only">Toggle user menu</span>
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>Sign In | Register</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
            className='hover:cursor-pointer'
            onClick={()=>router.push('/buyer/signin')}
            >
              My Orders
            </DropdownMenuItem>
            <DropdownMenuItem 
            className='hover:cursor-pointer'
            onClick={()=>router.push('/buyer/signin')}
            >
              My Message
            </DropdownMenuItem>
            <DropdownMenuItem 
            className='hover:cursor-pointer'
            onClick={()=>router.push('/buyer/signin')}
            >
              My Coupons
            </DropdownMenuItem>
            <DropdownMenuItem 
            className='hover:cursor-pointer'
            onClick={()=>router.push('/buyer/signin')}
            >
              My Points
            </DropdownMenuItem>
            <DropdownMenuItem 
            className='hover:cursor-pointer'
            onClick={()=>router.push('/buyer/signin')}
            >
              Setting
            </DropdownMenuItem>
          </DropdownMenuContent>
      </DropdownMenu>
      )
    }
  </>

  )
}

export default ToggleUserMenu

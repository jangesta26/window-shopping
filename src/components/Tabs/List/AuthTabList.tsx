'use client'
import React from 'react'
import {
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { Mail } from 'lucide-react'
import { MobileIcon } from '@radix-ui/react-icons'

const AuthTabList = () => {
  return (
    <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="email" className='flex gap-1'>
            <Mail className='h-4'/> 
            Email
        </TabsTrigger>
        <TabsTrigger value="phone" className='flex gap-1'>
            <MobileIcon/> 
            Phone
        </TabsTrigger>
    </TabsList>
  )
}

export default AuthTabList

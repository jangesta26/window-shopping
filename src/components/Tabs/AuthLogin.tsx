'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { useRouter } from 'next/navigation';
import { Mail } from 'lucide-react'
import { MobileIcon } from '@radix-ui/react-icons'
import SignInForm from '../Form/SignInForm'
import MobileNumberLoginForm from '../Form/MobileNumberLoginForm'

const AuthLogin = () => {
    const router = useRouter();
  return (
    <Tabs defaultValue="email" className="w-[400px]">
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
      <TabsContent value="email">
        <SignInForm />
      </TabsContent>
      <TabsContent value="phone">
        <MobileNumberLoginForm/>
      </TabsContent>
    </Tabs>
  )
}

export default AuthLogin

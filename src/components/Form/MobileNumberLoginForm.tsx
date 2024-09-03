'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PhoneCall, Send, Smartphone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import GoogleIcon from '@/Icons/GoogleIcon'
import FacebookIcon from '@/Icons/FacebookIcon'
import { MobileIcon } from '@radix-ui/react-icons'

const MobileNumberLoginForm = () => {
    const router = useRouter();
  return (
    <Card>
        <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your mobile number below to login to your account
        </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 mt-6">
        <div className="space-y-1">
            <Input 
            id="mobileNumber" 
            type="number" 
            placeholder="Enter your mobile number"
            className="pl-10 pr-4"
            suffix={
              <Smartphone
              className='translate-x-8 translate-y-2 pr-1 border-r-[1px] -ml-6 text-slate-700'
              />
            }
            />
        </div>
        </CardContent>
        <CardFooter className='flex flex-col space-y-2 mt-0.5'>
        <Button 
            type="submit" 
            className="w-full flex items-center justify-center gap-1"
            onClick={(e) => router.push('/product')}
            >
              <Send/>
            Send code via SMS
        </Button>
        <Button 
            type="submit" 
            className="w-full flex items-center justify-center gap-1 bg-muted text-black hover:text-white"
            onClick={() => router.push('/product')}
            >
              <PhoneCall/>
            Send code via WhatsApp
        </Button>
        </CardFooter>
        <div className='mb-[2.9rem] grid grid-rows-3 space-y-2 text-center'>
        <Label className='mt-2 text-muted-foreground'>
          Don't have an account? {" "}
          <Link 
          href='#'
          className='text-black hover:text-primary'
          >
            Sign up
          </Link>
        </Label>

        <Label className='text-muted-foreground'>
          Or, login with
        </Label>
        <div className='flex items-center justify-center space-x-2'>
          {/* gmail and fb */}
          <Button className='flex items-center justify-center gap-0.5'>
            <GoogleIcon/>
            Google
          </Button>
          <Button className='flex items-center justify-center gap-0.5'>
            <FacebookIcon/>
            Facebook
          </Button>
        </div>
        </div>
    </Card>
  )
}

export default MobileNumberLoginForm

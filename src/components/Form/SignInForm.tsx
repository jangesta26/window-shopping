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
import Link from 'next/link'
import GoogleIcon from '@/Icons/GoogleIcon'
import FacebookIcon from '@/Icons/FacebookIcon'

const SignInForm = () => {
    const router = useRouter();
  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
              Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Username</Label>
            <Input id="name" placeholder="example@email.com" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Password</Label>
            <Input 
            id="username" 
            type='password' 
            placeholder="**********"
            autoComplete='on'
            />
          </div>
          <div className='text-end text-sm'>
            <Link 
            href='#'
            className='hover:text-primary/90 hover:underline'
            >
              fogot a password?
            </Link>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
              type="submit" 
              className="w-full -mt-2"
              onClick={(e) => router.push('/product') }
              >
              Login
          </Button>
        </CardFooter>
        <div className='mb-5 grid grid-rows-3 space-y-2 text-center'>
        <Label className='text-muted-foreground'>
          Don't have an account? {" "}
          <Link 
          href='#'
          className='text-black hover:text-primary hover:underline'
          >
            Sign up
          </Link>
        </Label>

        <Label className='text-muted-foreground'>
          Or, login with
        </Label>
        <div className=' flex items-center justify-center space-x-2 px-2'>
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
    </form>
  )
}

export default SignInForm

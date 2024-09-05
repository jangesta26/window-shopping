'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { usePathname, useRouter } from 'next/navigation';
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
import { LockIcon, LucideEye, LucideEyeOff, User } from 'lucide-react'
import { PasswordInput } from '../ui/passwordInput'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { AuthLoginSchema, GetAuthLogin } from '@/types/auth'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useAuth } from '@/providers/AuthContext'

const SignInForm = () => {
    const pathname = usePathname();
    const { login } = useAuth();
    const [openEye, setOpenEye] = useState(false);

  const form = useForm<GetAuthLogin>({
    resolver: zodResolver(AuthLoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const slicedPathname = pathname.slice(1);
  const segments = slicedPathname.split('/');
  const userRole = segments[0];

  const onSubmit = async (formData: GetAuthLogin) => {
      const { username, password } = formData;
      if(userRole === 'seller'){
        if (username === 'admin123' && password === 'admin123') {
            login(userRole); 
        } else {
            alert('Admin failed to login!!!')
        }
      } else if(userRole === 'buyer') {
        if (username === 'client123' && password === 'client123') {
            alert('You have successfully to login!!!')
            login(userRole); 
        } else {
            alert('Failed to login!!!')
        }
      } else {
        alert('Invalid credentials!!!')
      }

  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
                Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
              <FormItem className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <FormControl>
                  <Input 
                  className="pl-10 pr-4"
                  placeholder="example@email.com" {...field}
                  autoComplete="username"
                  suffix={<User className='translate-x-8 translate-y-2 pr-1 border-r-[1px] -ml-6 text-slate-700'/>} 
                  />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
              )
            }
            />
           <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
              <FormItem>
                <Label htmlFor="password">Password</Label>
                <FormControl>
                  <PasswordInput 
                  type={!openEye ? 'password' : 'text' }
                  placeholder="Input your password" {...field}
                  autoComplete='on'
                  className='pl-10 pr-4'
                  suffix={<LockIcon className='translate-x-8 translate-y-2 pr-1 border-r-[1px] -ml-6 text-slate-700'/>}
                  showPassword={
                    field.value && (
                      !openEye 
                      ? (
                        <LucideEyeOff 
                        className='-translate-x-4 translate-y-2 pr-0.5 -ml-6 text-slate-700 hover:cursor-pointer'
                        onClick={(e)=>setOpenEye(true)}
                        />
                      ) : (
                        <LucideEye 
                        className='-translate-x-4 translate-y-2 pr-0.5 -ml-6 text-slate-700 hover:cursor-pointer'
                        onClick={(e)=>setOpenEye(false)}
                        />
                      )
                    )
                  
                  }
                  />
                </FormControl>
                  <FormDescription>
                  </FormDescription>
                  <FormMessage />
              </FormItem>
              )}
            />
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
    </Form>
  )
}

export default SignInForm

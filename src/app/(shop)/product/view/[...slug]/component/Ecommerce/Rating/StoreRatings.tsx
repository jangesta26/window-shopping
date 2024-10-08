import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Label } from '@/components/ui/label'
import { MessageSquareText, Store } from 'lucide-react'

const StoreRatings = () => {
  return (
    <section className="mt-8 bg-gray-700 p-6">
      <div className='flex flex-col md:flex-row items-center text-white'>
        <div className='flex items-center gap-4 mx-auto md:mx-0'>
          <Avatar className='w-28 h-28'>
            <AvatarImage 
              src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg" 
              alt="lets-shop"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-col'>
              <h1 className='text-xl font-bold'>Let&apos;s Shop</h1>
              <p className='text-sm font-light text-gray-400'>Active 8 minutes ago</p>
            </div>
            <div className='flex flex-wrap gap-2'>
              <Button 
                className='flex gap-1.5 px-2'
              > 
                <MessageSquareText className='h-4 w-4'/>
                Chat Now
              </Button>
              <Button
                className='flex gap-1.5 px-2'
              >
                <Store className='h-4 w-4' />
                Visit Shop
              </Button>
            </div>
          </div>
        </div>
        <Separator
          orientation="vertical" 
          className='hidden md:block mx-4 h-20'
        />
        <Separator
          orientation="horizontal" 
          className='md:hidden mx-4 my-4'
        />
        <div className='flex-grow'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex items-center gap-4'>
              <Label>Ratings:</Label>
              <p className='text-yellow-400'>836.2K</p>
            </div>
            <div className='flex items-center gap-4'>
              <Label>Response rate:</Label>
              <p className='text-yellow-400'>57%</p>
            </div>
            <div className='flex items-center gap-4'>
              <Label>Joined:</Label>
              <p className='text-yellow-400'>6 years ago</p>
            </div>
            <div className='flex items-center gap-4'>
              <Label>Products:</Label>
              <p className='text-yellow-400'>369</p>
            </div>
            <div className='flex items-center gap-4'>
              <Label>Response time:</Label>
              <p className='text-yellow-400'>within minutes</p>
            </div>
            <div className='flex items-center gap-4'>
              <Label>Followers:</Label>
              <p className='text-yellow-400'>270.1K</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreRatings

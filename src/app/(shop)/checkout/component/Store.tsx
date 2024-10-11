import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { MessagesSquare } from 'lucide-react'
import { Label } from '@/components/ui/label'

const Store = () => {
  return (
    <div className='flex items-center gap-2 mb-2'>
    <div className='flex items-center justify-center gap-1.5'>
      <Avatar className='h-8 w-8'>
        <AvatarImage 
          src="https://e7.pngegg.com/pngimages/847/601/png-clipart-apple-store-logo-ipad-apple-logo-computer-heart.png"
          alt="Mac Logo" 
          width={150}
          height={150}
        />
        <AvatarFallback>Mac</AvatarFallback>
      </Avatar>
      <Label>Apple Store</Label>
    </div>
    <Separator
      orientation='vertical'
      className='h-4 border-slate-500 border-1'
    />
    <Button 
      className='flex gap-0.5 text-green-600 px-0 h-0'
      variant="ghost"
    >
      <MessagesSquare /> chat now
    </Button> 
  </div>
  )
}

export default Store

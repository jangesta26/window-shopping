import React from 'react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { Label } from '@/components/ui/label'

const StoreItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-4 items-start justify-between w-full'>
    <div className='flex items-center md:items-start'>
      <div className='flex h-10'>
        <Image
          src="https://tcc.on.ca/wp-content/uploads/2023/09/iPhone_15_Pro_Blue_Titanium_lrg3-1.png"
          alt="iPhone 15 Pro Max"
          width={300}
          height={300}
          className='h-10 w-10'
        />
      </div>
      <div className='flex flex-col text-left md:text-left gap-1'>
        <Label>Apple iPhone 15 Pro Max</Label>
        <Badge 
          variant="outline" 
          className='hidden xl:flex w-3/5 text-sm font-light rounded-sm text-green-600 border-green-500'
        >
          Free Return
        </Badge>
      </div>
    </div>
    <div className='flex item-start justify-start flex-initial w-[170px] text-sm font-light text-slate-500 gap-2'>
      <span className='md:hidden text-black font-semibold'>Variation:</span>
      Blue Titanium, 1TB
    </div>
    <div className='flex item-start justify-start text-sm font-light gap-2'>
      <span className='xl:hidden text-black font-semibold'>Unit Price:</span>
      ₱99,990
    </div>
    <div className='flex item-start justify-start text-sm font-light gap-2'>
      <span className='xl:hidden text-black font-semibold'>Quantity:</span>
      1
    </div>
    <div className='flex item-start justify-start text-sm font-light gap-2'>
      <span className='xl:hidden text-black font-semibold'>Subtotal:</span>
      ₱99,990
    </div>
  </div>
  )
}

export default StoreItem

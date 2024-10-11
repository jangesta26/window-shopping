import React from 'react'
import { Label } from '@/components/ui/label'
const HeadItem = () => {
  return (
    <div className='flex xl:flex-wrap px-4 py-2 items-center justify-between mb-4 text-center md:text-left'>
    <Label className='text-xl font-semibold'>Product Ordered</Label>
    <Label className='hidden xl:flex flex-initial w-80'></Label>
    <Label className='hidden xl:flex text-md font-light text-slate-500'>Unit Price</Label>
    <Label className='hidden xl:flex text-md font-light text-slate-500'>Quantity</Label>
    <Label className='hidden xl:flex text-md font-light text-slate-500'>Item Subtotal</Label>
  </div>
  )
}

export default HeadItem

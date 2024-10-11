import React from 'react'
import HeadItem from './HeadItem'
import Store from './Store'
import StoreItem from './StoreItem'
import { Label } from '@/components/ui/label'
import { CircleHelp, HelpCircle, Ticket } from 'lucide-react'
import Link from 'next/link'
import { Textarea } from '@/components/ui/textarea'
import Delivery2 from '@/Icons/Delivery2'
import Delivery from '@/Icons/Delivery'
import { Button } from '@/components/ui/button'

const ProductOrdered = () => {
  return (
  <>
    <div className='mx-auto w-full flex-wrap items-center justify-center p-4 mt-4 px-10 py-6 bg-slate-100'>
        {/* Header Items */}
        <HeadItem />
      <div className='flex md:flex-row border-1 px-4 py-2 rounded-sm shadow mb-1.5'>
        <div className='flex flex-col items-center md:items-start w-full mb-4'>
          {/* Store */}
            <Store />
          {/* Store item */}
            <StoreItem />
        </div>
      </div>
      
    </div>
    {/* others */}
    <div className='mx-auto w-full flex flex-col items-center border-t-2 bg-slate-100'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col md:flex-row border-0 divide-x divide-dashed border-dashed'>
            <div className='flex md:w-2/4 items-center justify-between px-10 py-4'>
              <div className='flex items-center gap-2'>
                <Label className='text-xl font-bold'>E-Invoice</Label>
                <CircleHelp className='text-slate-500 h-5 w-5'/>
              </div>
              <div className='flex items-center gap-2'>
                <Link href='#' className='font-semibold text-primary hover:underline'>
                  Request Now
                </Link>
              </div>
            </div>
            <div className='flex md:w-11/12 items-center justify-between px-10 py-4'>
              <div className='flex items-center justify-between gap-2'>
                <Ticket className='text-yellow-600 h-6 w-6'/>
                <Label className='text-md font-light'>Shop Voucher</Label>
              </div>
              <div className='flex items-center gap-2'>
                <Link href='#' className='font-semibold text-primary hover:underline'>
                  Select Voucher
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center border-t border-b divide-x divide-dashed border-dashed'>
            <div className='flex flex-col justify-start md:justify-start md:flex-row items-start w-full md:w-2/4 gap-2 px-10 py-4'>
              <Label className='text-md'>Message for Sellers:</Label>
              <Textarea className='flex-1' placeholder="Type your message here." />
            </div>
            <div className='flex flex-col md:w-11/12 px-5 md:px-10 py-10 gap-4'> 
            <div className='flex flex-col md:flex-row space-y-4 items-start'>
              <div className='flex gap-2 flex-1'>
                <span className='font-semibold'>Shipping Option:</span>
                <div className='flex flex-col'>
                  <p className='text-sm md:text-base'>Standard Local</p>
                  <div className='flex flex-col md:flex-row md:flex-wrap items-start gap-1'>
                    <div className='flex items-center gap-1'>
                      <Delivery />
                      <p className='text-primary text-xs md:text-sm font-semibold'>Guaranteed to get by 14 - 17 Oct</p>
                    </div>
                    <div className='flex text-xs md:text-sm items-center gap-1.5'>
                      <p>Get ₱50 voucher if no delivery was attempted by 17 Oct 2024.</p>
                      <HelpCircle className='h-5 md:h-6'/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-start md:justify-end md:flex-row items-center gap-5 px-16 md:px-4'>
                <Button 
                  variant={null}
                  className='text-primary hover:underline text-sm md:text-base'
                >
                  Change
                </Button>
                <span className='font-semibold text-lg md:text-xl'>₱0</span>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='flex md:flex-row w-full items-center justify-center md:justify-end gap-4 p-4 md:p-8'>
          <Label className='text-slate-500'>Order Total ({1} Item):</Label>
          <span className='text-md font-semibold text-primary'>₱99,190</span>
        </div>
      </div>
  </>
  )
}
export default ProductOrdered

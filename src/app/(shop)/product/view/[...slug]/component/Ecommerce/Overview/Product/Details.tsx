import { Label } from '@/components/ui/label'
import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import Voucher from '../../../Card/Voucher'
import VoucherBadge from '../../../Badge/VoucherBadge'
import ReplyArrow from '@/Icons/ReplyArrow'
import { CircleHelp } from 'lucide-react'
import Location from '../../../Dropdown/Location'
import Delivery from '@/Icons/Delivery'
import Delivery2 from '@/Icons/Delivery2'
import { flag } from '@/utils/countryFlag'


const Details = () => {
  return (
    <div className='flex flex-col items-start text-white mt-4 gap-4 mb-10'>
      <div className='flex items-center gap-4'>
        
        <Label>Shop Vouchers</Label>

          <HoverCard>
              <HoverCardTrigger asChild>
                  <Button
                  variant={null}
                  >
                    <VoucherBadge />
                  </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-96">
                  <h1 className='text-md font-light'>
                      Shop Voucher
                  </h1>
                  <p className='text-[11px] font-light text-justify text-gray-500 mb-3'>
                      Save more by applying these Shop Vouchers to the items in your shopping cart.
                  </p>
                    <div className="space-y-1 mt-1">
                      <Voucher />
                  </div>
              </HoverCardContent>
          </HoverCard>
      </div>

      <div className='flex items-center gap-[40px]'>
        <Label>Return</Label>
        <div className='flex flex-wrap items-center gap-2 text-sm font-light'>
          <div className='flex gap-2'>
            <ReplyArrow /> Free & Easy Returns
          </div>
          <HoverCard>
            <HoverCardTrigger asChild className='h-0 px-0 gap-1'>
                <Button
                variant={null}
                >
                <Label className='text-sm font-light text-gray-400'>Learn more</Label>
                  <CircleHelp className='text-sm font-light text-gray-400 h-4 w-4'/>
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-96">
                <p className='text-sm font-light text-gray-500 mb-3'>
                  Returns are completely free, with no need to contact sellers. Valid even if you Changed Your Mind.
                  <br/> *Terms and conditions apply
                </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>

      <div className='flex items-start gap-[30px]'>
        <div>
          <Label>Shipping</Label>
        </div>
        <div className='flex flex-col'>
          <div className='flex gap-1'>
              <Delivery /> 
              <div className='flex flex-col'>
                <p className='flex  items-center  gap-1 text-white text-[12px]'>Shipping Discount</p>
                <p className='text-gray-400 font-light text-[11px]'>Shipping discount for orders over ₱249</p>
              </div>
          </div>
          <div className='flex flex-row items-center gap-6 mt-2'>
              <div className='flex items-start gap-2 '>
                <Delivery2 />
                <div className='space-y-1'>
                  <p className='text-white font-light text-[12px]'>Shipping to</p>
                  <p className='text-white font-light text-[12px]'>Shipping Fee</p>
                </div>
              </div>
              <div className='flex flex-col items-start gap-2 '> 
                  <Location country={flag}/>
                  <p className='text-white font-light text-[12px]'>₱{20} - ₱{90}</p>
              </div>   
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Details

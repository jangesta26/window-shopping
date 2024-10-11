import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { MapPin } from 'lucide-react'
import React from 'react'

const DeliveryAddress = () => {
  return (
    <div className='mx-auto w-full items-center justify-center p-4 mt-10 px-10 bg-slate-100 border-dashed border-[#232A70] border-t-[8px]'>
      <h1 className='flex gap-1 text-xl font-semibold mb-4'>
        <MapPin /> Delivery Address
      </h1>
        {/* Delivery Address Section */}
        <div className='flex flex-wrap items-center justify-between gap-2 px-4'>
            <div className='flex flex-col items-start'>
              <Label className='text-md font-semibold'>Jone Doe</Label>
              <p className='text-sm'>+63 901 2345 678</p>
            </div>
            <div className='flex flex-wrap items-end justify-start gap-4'>
            <div>3J9C+295, Poblacion District, Davao City, Davao del Sur</div>
            <div className='flex gap-2'>
              <Badge
                variant="outline"
                className='rounded-sm border-green-500 h-8 text-green-900'
              >
                Default
              </Badge>
              <Button
                variant="default"
                className='h-8 px-2 rounded-sm'
              >
                Change
              </Button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default DeliveryAddress

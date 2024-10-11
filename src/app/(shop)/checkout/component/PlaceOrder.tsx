'use client'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';
import React, { useState } from 'react'

const PlaceOrder = () => {

    const [selectedPayment, setSelectedPayment] = useState(null);

    const handleSelectPayment = (paymentMethod:any) => {
      setSelectedPayment(paymentMethod);
    };
  
    const paymentMethods = [
      "Winshopee (₱0.00)",
      "E-Wallet",
      "Online Banking",
      "Credit / Debit",
      "Google Pay",
      "Paypal",
      "Amazon Pay",
      "Pay Maya"
    ];

  return (
    <div className='mx-auto w-full flex-col items-center justify-center mt-4 bg-slate-100 divide-y divide-solid'>
      <div className='flex flex-col w-full items-start gap-4 px-4 sm:px-6 lg:px-10 py-6'>
        <h2 className='text-lg font-semibold'>Payment Method</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {paymentMethods.map((method, index) => (
                <Button
                key={index}
                variant="outline"
                className={`flex-1 rounded-md text-sm font-light flex items-center justify-center gap-2 
                ${selectedPayment === method ? 'bg-blue-500 text-white' : ''} 
                w-full h-12 sm:h-10 md:h-12 lg:h-14`}
                onClick={() => handleSelectPayment(method)}
                >
                {method}
                </Button>
            ))}
            </div>
        </div>
                
        <div className='flex flex-wrap w-full items-center gap-4 px-4 sm:px-6 lg:px-10 py-6'>
            <h2 className='text-lg font-semibold'>Payment Method</h2>
            <Button
            variant="outline"
            className="flex-1 min-w-[150px] max-w-[200px] rounded-md text-sm font-light flex items-center justify-center h-12 sm:h-10 md:h-12 lg:h-14"
            >
                <Plus/> Pay With New Card
            </Button>
        </div>
        <div className='flex w-full items-center justify-end gap-4 px-4 sm:px-6 lg:px-10 py-6'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-10'>
                    <span className='text-slate-500'>Merchandise Subtotal: </span>
                    <p className='text-sm'>₱99,190</p>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <span className='text-slate-500'>Shipping Total: </span>
                    <p className='text-sm'>₱0</p>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <span className='text-slate-500'>Total Payment: </span>
                    <p className='text-2xl font-semibold text-primary'>₱99,190</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col sm:flex-row w-full items-center md:justify-end sm:justify-center gap-4 px-4 sm:px-6 lg:px-10 py-6'>
        <Button
            className="flex-none min-w-[150px] max-w-[200px] rounded-md text-sm font-light flex items-center justify-center h-12"
        >
            Place Order
        </Button>
        </div>

    </div>
  )
}

export default PlaceOrder

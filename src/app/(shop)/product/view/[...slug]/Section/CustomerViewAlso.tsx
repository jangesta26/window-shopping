import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';

const CustomerViewAlso = () => {
  return (
    <div className="mt-12 ">
        <div className='w-full flex items-center justify-between px-2'>
        <h3 className="text-lg lg:text-xl font-semibold text-black">Customer Also Viewed</h3>
        <Link href='#' className='flex gap-1.5 hover:text-primary'>See All <ArrowRightIcon /> </Link>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 bg-gray-700 p-4">
            {[...Array(8)].map((_, index) => (
            <div key={index} className="w-full lg:w-[200px] bg-gray-900 p-1 rounded-xl text-center">
                <Image 
                src={`https://readymadeui.com/images/product${index+1}.webp`} 
                alt={`Product ${index + 3}`} 
                className="w-full h-auto rounded-lg object-cover mb-4" 
                width={300}
                height={300}
                />
                <h4 className="text-sm lg:text-base text-white">Product Name {index + 1}</h4>
                <p className="text-yellow-300 text-sm lg:text-base mt-1">$15.00</p>
            </div>
            ))}
        </div>
    </div>
  )
}

export default CustomerViewAlso

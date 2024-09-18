import React from 'react'
import { Separator } from '@/components/ui/separator';

const ProductRatings = () => {
  return (
    <div className='flex h-5 items-center space-x-4 text-sm'>
      <div className="flex space-x-2 mt-4 ">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index} 
            className={`w-[18px] ${index < 3 ? 'fill-yellow-300' : 'fill-[#CED5D8]'}`} 
            viewBox="0 0 14 13" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
          </svg>
        ))}
        <h4 className="text-white text-sm lg:text-base">500 Reviews</h4>
        
        
      </div>
      <Separator orientation="vertical" className='bg-white mt-2' />
      <div className='flex items-center justify-center mt-4' >
        <h4 className="text-white text-sm lg:text-base">
        3.5K Sold
        </h4>
      </div>
    </div>
  )
}

export default ProductRatings

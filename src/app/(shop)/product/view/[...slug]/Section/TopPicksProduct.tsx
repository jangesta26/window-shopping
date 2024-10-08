import React from 'react'
import Title from './Label/Title'
import Image from 'next/image'

const TopPicksProduct = (props:any) => {
  return (
    <div className='bg-gray-700 p-4 hidden md:block'>
      <Title
        title={props.title}
      />
        <div className='mt-2 flex flex-col items-center space-y-2'>
        {[...Array(5)].map((_, index) => (
            <div key={index} className="w-full lg:w-[200px] bg-gray-900 p-2 rounded-xl text-center">
            <Image 
            src={`https://readymadeui.com/images/product${index + 5}.webp`} 
            alt={`Product ${index + 3}`} 
            className="w-full h-auto object-cover rounded-lg mb-4"
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

export default TopPicksProduct

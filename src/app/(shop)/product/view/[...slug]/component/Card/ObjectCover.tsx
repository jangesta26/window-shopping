import Image from 'next/image';
import React from 'react'

const ObjectCover = (
    { 
        imageSrc,
        defaultImageSrc
    }:{ 
        imageSrc: string | null
        defaultImageSrc: string
}) => {
    const displayImageSrc = imageSrc || defaultImageSrc;
  return (
    <div className="mx-auto bg-gray-800 p-2 rounded-xl">
        <Image 
        src={displayImageSrc}
        alt="Product" 
        className="w-full lg:w-2/4 rounded-xl object-cover mx-auto " 
        width={300}
        height={300}
        />
    </div>
  )
}

export default ObjectCover

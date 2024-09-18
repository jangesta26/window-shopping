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
        <img 
        src={displayImageSrc}
        alt="Product" 
        className="w-full lg:w-2/4 rounded-xl object-cover mx-auto " 
        />
    </div>
  )
}

export default ObjectCover

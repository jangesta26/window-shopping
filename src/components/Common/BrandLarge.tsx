import Image from 'next/image'
import React from 'react'

const BrandLarge = () => {
  return (
      <Image
        src="/images/brandlogo/brandlogo.png"
        alt="Brand logo"
        width={80}
        height={80}
        className="shadow-lg"
      />
  )
}

export default BrandLarge

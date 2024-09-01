import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Brand = () => {
  return (
    <Link href="#" className="flex items-center gap-2">
        <Image
        src="/images/brandlogo/brandlogo.png"
        alt="Brand logo"
        width={80}
        height={80}
        className="shadow-lg"
        />
            <h2 className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl lg:leading-8">
            Winshopee
            </h2>
    </Link>
  )
}

export default Brand

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandSmall = () => {
  return (
    <Link href="#" className="flex items-center gap-2">
        <Image
        src="/images/brandlogo/brandlogo.png"
        alt="Brand logo"
        width={60}
        height={60}
        className="shadow-lg rounded-md"
        />
            <h2 className="text-md font-bold leading-6 text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-2xl lg:leading-8">
            Winshopee
        </h2>
    </Link>
  )
}

export default BrandSmall

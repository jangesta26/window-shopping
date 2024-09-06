import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrandSmall = () => {
  return (
    <Link href="/">
        <div className='flex items-center gap-2 justify-center p-4'>
          <Image
          src="/images/brandlogo/brandlogo.png"
          alt="Brand logo"
          width={60}
          height={60}
          className="shadow-lg rounded-md"
          />
              <h2 className="text-2xl font-bold leading-6 text-gray-900 dark:text-white sm:text-2xl md:text-3xl lg:text-2xl lg:leading-8">
              Winshopee
          </h2>
        </div>
    </Link>
  )
}

export default BrandSmall

import Link from 'next/link'
import React from 'react'

const ProductItem = (
  {
    catogoryId,
    catogoryAlt,
    catogoryimageSrc,
    catogoryName,

  }:{
    catogoryId?:number
    catogoryAlt?:string
    catogoryimageSrc?:string
    catogoryName?:string

  }) => {
  return (
    <Link key={catogoryId} href="#" className="group">
      <div className="w-full overflow-hidden rounded-lg shadow-md border-black bg-slate-50 dark:bg-gray-700/5">
        <img
          alt={catogoryAlt}
          src={catogoryimageSrc}
          className="h-full p-10 w-full object-cover object-center group-hover:opacity-75"
        />
        <h3 className="p-4 text-md text-center text-gray-700 dark:text-white">{catogoryName}</h3>
      </div>
    </Link>
  )
}

export default ProductItem

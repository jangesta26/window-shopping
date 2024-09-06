import { Label } from '@/components/ui/label'
import React from 'react'
import StarRating from './StarRating'
import { Badge } from '@/components/ui/badge'
import BadgeProduct from '../Badge/Badge'

const ProductItem = (
    {
        productId,
        productImageAlt,
        productImageSrc,
        productHref,
        productName,
        productColor,
        productPrice,
        productSold,
        productStar,
        productBadge
    }:{
        productId: number
        productImageAlt: string
        productImageSrc: string
        productHref: string
        productName: string
        productColor: string
        productPrice: string
        productSold: string
        productStar: number
        productBadge: string
    }) => {
        console.log(productBadge)
  return (
    <div className="group relative border shadow rounded-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-md bg-gray-50 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <span className="mt-[-12px] absolute top-0 right-0 flex items-center bg-primary rounded-l-full py-2 px-3 text-xl font-semibold text-amber-100">
            50% <small className="text-xs ml-1 text-white">/ Today</small>
            </span>
            <p className="px-2 text-md font-medium text-gray-900">{productPrice}</p>
        <img
            alt={productImageAlt}
            src={productImageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        </div>
        <div className="mt-2 flex flex-col p-1 px-2">
            <div className='flex items-center justify-between'>
                <h3 className="text-sm text-gray-700">
                <a href={productHref}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {productName}
                </a>
                </h3>
                <p className='text-sm text-gray-900'>{productSold} sold</p>
            </div>
            {productBadge && (
                <BadgeProduct title={productBadge} />
            )}
            <div className="flex items-center">
            <StarRating rating={productStar}/>
            <Label className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{productStar.toFixed(2)}</Label>
            <Label className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">Reviews</Label>
            </div>
        </div>
    </div>
  )
}

export default ProductItem

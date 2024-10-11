import { Label } from '@/components/ui/label';
import React from 'react';
import StarRating from './StarRating';
import BadgeProduct from '../Badge/Badge';
import Image from 'next/image';

const ProductItem = (
  {
    productImageAlt,
    productImageSrc,
    productHref,
    productName,
    productPrice,
    productSold,
    productStar,
    productBadge
  }: {
    productImageAlt: string;
    productImageSrc: string;
    productHref: string;
    productName: string;
    productPrice: string;
    productSold: string;
    productStar: number;
    productBadge: string;
  }
) => {
  return (
    <div className="group relative border shadow rounded-md h-full w-full max-w-xs mx-auto">
      <div className="overflow-hidden rounded-t-md bg-gray-50 md:h-56 h-64">
        <span className="mt-[-12px] absolute top-0 right-0 flex items-center bg-primary rounded-l-full py-1 px-2 text-sm font-semibold text-amber-100">
          50% <small className="text-xs ml-1 text-white">/ Today</small>
        </span>
        <p className="px-2 text-md font-medium text-gray-900">{productPrice}</p>
        <Image
          alt={productImageAlt}
          src={productImageSrc}
          className="w-full object-cover object-center"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-2 flex flex-col px-4 py-2">
        <div className="flex md:flex-wrap items-center justify-between">
          <h3 className="text-sm sm:text-base text-gray-700">
            <a href={productHref}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productName}
            </a>
          </h3>
          <p className="text-sm text-gray-900">{productSold} sold</p>
        </div>
        {productBadge ? (
          <BadgeProduct title={productBadge} />
        ) : (
          <div className="mb-2"></div>
        )}
        <div className="flex md:flex-wrap items-center justify-between mt-2"> {/* Changed to flex for better alignment */}
          <StarRating rating={productStar} />
          <div className='flex'>
          <Label className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{productStar.toFixed(2)}</Label>
          <Label className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">Reviews</Label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
